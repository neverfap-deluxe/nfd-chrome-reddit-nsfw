// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {
  // fetchAudioMeditationsList();

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

// chrome.runtime.onStartup.addListener(function () {
// });

// chrome.runtime.onUpdateAvailable.addListener(function () {
// });

//   chrome.storage.sync.set({ meditationsList, selectedMeditation: meditationsList[0] }, function (data) {
//   });
// }
