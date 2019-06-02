// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {  
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

chrome.runtime.onInstalled.addListener(function() {  
  fetchAudioMeditationsList();


  // chrome.storage.sync.set({selectedMeditation: '#3aa757'}, function() {
  //   console.log("The color is green.");
  // });
  
});



function fetchAudioMeditationsList() {
  console.log('hi')
  fetch('https://neverfapdeluxe.netlify.com/meditations/index.json')
    .then(function(response) {
      chrome.storage.sync.set({meditationList: response.json()}, function() {
        console.log(response.json())
        chrome.storage.sync.set({selectedMeditation: response.json()[0] }, function(data) {
          
        });
      });    
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
}
