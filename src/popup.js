let wipePage = document.getElementById('wipePage');
let previous = document.getElementById('previous');
let next = document.getElementById('next');


previous.onclick = function(element) {
  chrome.storage.sync.get('meditationList', function(data) {
    console.log(data)
  }
}

next.onclick = function(element) {

}

wipePage.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.display = "none";'});
  });
};

chrome.storage.sync.get('meditationList', function(data) {
  console.log(data)
  // changeColor.style.backgroundColor = data.color;
  // changeColor.setAttribute('value', data.color);
});


// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//   // let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.display = "none";'});
//         // {code: 'document.body.style.display = "' + color + '";'});
//   });
// };
