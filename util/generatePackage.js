// https://github.com/oncletom/crx

const fs = require('fs');
const path = require('path');

const ChromeExtension = require('crx');

const crx = new ChromeExtension({
  codebase: 'http://localhost:8000/myExtension.crx',
  privateKey: fs.readFileSync('./key.pem')
});

crx.load( path.resolve(__dirname, './myExtension') )
  .then(crx => crx.pack())
  .then(crxBuffer => {
    const updateXML = crx.generateUpdateXML()

    fs.writeFile('../update.xml', updateXML);
    fs.writeFile('../myExtension.crx', crxBuffer);
  })
  .catch(err=>{
    console.error( err );
  });
