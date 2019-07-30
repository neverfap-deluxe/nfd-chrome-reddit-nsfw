let wipePage = document.getElementById('wipePage');
let close__popup = document.getElementById('close__popup');

// let previous__meditation__button = document.getElementById('previous__meditation__button');
// let next__meditation__button = document.getElementById('next__meditation__button');

// let meditation__audio__player = document.getElementById('meditation__audio__player');;
// let meditation__title__single = document.getElementById('meditation__title__single');;



function mainAlgorithm() {
	if (location.origin.includes("reddit")) {
		var splitLocation = location.href.split('/')
		blockDirectNSFWPage(splitLocation)
		removeNSFWPostsFromFeed()
	}
}

function blockDirectNSFWPage(splitLocation) {
	if (splitLocation.length === 6) {
		var r = splitLocation[3];
		var subreddit_name = splitLocation[4];
		var nsfwSubredditClassName = `.SubredditVars-${r}-${subreddit_name}`;
		var textToSearch = 'nsfwAdult content';

		var subreditvars = document.querySelectorAll(nsfwSubredditClassName);

		if (!!subreditvars) {
			for(let i = 0; i < subreditvars.length; i++) {
        console.log(subreditvars[i].textContent.includes(textToSearch))
        
				if (subreditvars[i].textContent.includes(textToSearch)) {
          document.body.innerHTML = `
            <p style="padding: 1rem;">This is a NSFW Reddit.</p>
            <p style="padding: 1rem;">Thank you NeverFap Deluxe!</p>
          `;
          break;
					// window.close(); // this doesn't work in a script
				}
			}
		} else {
			throw new Error('Algorithm no longer works.');
		}
	}
}

function removeNSFWPostsFromFeed() {
	// this will need to be reactive, because more posts will continue to load.
}


// not used.
var elms = document.querySelector(".cakecake");
var len = elms.length;

for(var ii = 0; ii < len; ii++) {
    var myChildred = elms[ii].childNodes;
    len2 = myChildred.length;
    for (var jj = 0; jj < len2; jj++) {
        if(myChildred[jj].nodeType === 3) {
            console.log(myChildred[jj].nodeValue);

            // example on update a text node's value
            myChildred[jj].nodeValue = myChildred[jj].nodeValue.replace(/test/,"123");
        }
    }
}

