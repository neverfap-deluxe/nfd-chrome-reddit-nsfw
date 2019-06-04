// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {
  fetchAudioMeditationsList();

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: '.'},
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.runtime.onStartup.addListener(function () {
  fetchAudioMeditationsList();
});

chrome.runtime.onUpdateAvailable.addListener(function () {
  fetchAudioMeditationsList();
});

function fetchAudioMeditationsList() {
  const meditationsList = [
    {
      title: "Observe Your Senses (pilot)",
      mp3Url: "https://s3.castbox.fm/1d/10/e3/9239a649bb85addc36d0754c3a.mp3",
      position: 0,
    },
    {
      title: "Observe Your Senses",
      mp3Url: "https://s3.castbox.fm/61/6f/59/95055247d0b6fe18ccc053aaec.mp3",
      position: 1,
    }
    // {
    //   title: "The Cloud Of Sensation",
    //   mp3Url: "https://s3.castbox.fm/1d/10/e3/9239a649bb85addc36d0754c3a.mp3",
    //   position: 2,
    // },
  ];

  chrome.storage.sync.set({ meditationsList, selectedMeditation: meditationsList[0] }, function (data) {
    console.log(data);
  });
}
