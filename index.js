"use strict";

(function () {
  var fjs = document.getElementsByTagName('script')[0];
  var js = document.createElement('script');
  js.src = "./redirect.js?t=".concat(Date.now());
  js.type = 'module';
  fjs.parentNode.insertBefore(js, fjs);
})();