let wipePage = document.getElementById('wipePage');
let close__popup = document.getElementById('close__popup');

let previous__meditation__button = document.getElementById('previous__meditation__button');
let next__meditation__button = document.getElementById('next__meditation__button');

let meditation__audio__player = document.getElementById('meditation__audio__player');;
let meditation__title__single = document.getElementById('meditation__title__single');;

close__popup.onclick = function(element) {
  window.close();
};

chrome.storage.sync.get('selectedMeditation', function (data) {
  setNewMeditation(data.selectedMeditation);

  previous__meditation__button.style.visibility = 'hidden';
});

previous__meditation__button.onclick = function(element) {
  chrome.storage.sync.get(['selectedMeditation', 'meditationsList'], function (data) {
    console.log('here');
    const { isFirstOrLast, newMeditation } = getNextMeditation(data.selectedMeditation, data.meditationsList, -1);

    console.log(isFirstOrLast, newMeditation);
    disappearOrAppearFirstAndLast(isFirstOrLast, next__meditation__button);
    setNewMeditation(newMeditation);
  });
};

next__meditation__button.onclick = function (element) {
  chrome.storage.sync.get(['selectedMeditation', 'meditationsList'], function (data) {
    const { isFirstOrLast, newMeditation } = getNextMeditation(data.selectedMeditation, data.meditationsList, 1);

    disappearOrAppearFirstAndLast(isFirstOrLast, previous__meditation__button);
    setNewMeditation(newMeditation);
  });
};

wipePage.onclick = function(element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.display = "none";',
    });
  });
};

function getNextMeditation(selectedMeditation, meditationList, movement) {
  const isFirstOrLast = selectedMeditation.position === 0 || meditationList.length === (selectedMeditation.position + 1) ? true : false;
  // the problem is that this is always true.

  const newPosition = selectedMeditation.position + movement;
  const validateNewPosition = newPosition < 0 || newPosition >= meditationList.length ? selectedMeditation.position : newPosition;
  const newMeditation = meditationList[validateNewPosition];

  chrome.storage.sync.set({ selectedMeditation: newMeditation }, function (data) {});

  return {
    isFirstOrLast,
    newMeditation,
  }
}

function setNewMeditation(selectedMeditation) {
  const selectedMeditationUrl = selectedMeditation.mp3Url;
  const selectedMeditationTitle = selectedMeditation.title;

  meditation__audio__player.src = selectedMeditationUrl;
  meditation__title__single.innerHTML = selectedMeditationTitle;

  meditation__audio__player.load();
}

function disappearOrAppearFirstAndLast(isFirstOrLast, component) {
  if (isFirstOrLast) {
    component.style.visibility = 'hidden';
  } else {
    component.style.visibility = 'visible';
  }
}