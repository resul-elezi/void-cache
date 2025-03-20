'use strict';

chrome.action.onClicked.addListener(() => {
    chrome.browsingData.remove({}, {
      "cache": true,
      "cookies": false,
      "history": false
    }, () => {
      alert("Cache has been deleted!");
    });
  });
  