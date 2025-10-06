'use strict';

browser.browserAction.onClicked.addListener(() => {
  browser.browsingData.remove({}, {
    cache: true,
    cookies: false,
    history: false,
    downloads: false,
    formData: false,
    passwords: false
  }).then(() => {
    console.log("Cache cleared successfully.");
  }).catch((error) => {
    console.error("Error clearing cache:", error);
  });
});

  