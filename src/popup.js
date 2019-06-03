let wipePage = document.getElementById('wipePage');

let previous__meditation__button = document.getElementById('previous__meditation__button');
let next__meditation__button = document.getElementById('next__meditation__button');
let meditation__audio__player = document.getElementById('meditation__audio__player');;
let meditation__title__single = document.getElementById('meditation__title__single');;

chrome.storage.sync.get('selectedMeditation', function (data) {
  const selectedMeditationUrl = data.selectedMeditation.mp3Url;
  const selectedMeditationTitle = data.selectedMeditation.title;
  console.log(data.selectedMeditation);
  console.log(selectedMeditationTitle)
  meditation__audio__player.src = selectedMeditationUrl;
  meditation__title__single.innerHTML = selectedMeditationTitle;

  meditation__audio__player.load();
});

previous__meditation__button.onclick = function(element) {
  chrome.storage.sync.get('meditationsList', function(data) {
    console.log(data);
  });
};

next__meditation__button.onclick = function (element) { };

wipePage.onclick = function(element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.display = "none";',
    });
  });
};
