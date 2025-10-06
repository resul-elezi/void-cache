'use strict';

chrome.action.onClicked.addListener(() => {
    chrome.browsingData.remove({}, {
      "cache": true,
      "cookies": false,
      "history": false
    }, () => {
      console.log("Cache has been deleted!");
    });
  });
  