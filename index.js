/*!
 * disable-input-scroll <https://github.com/Tanvir-rahman/disable-input-scroll>
 *
 * Copyright (c) 2021, Tanvir Rahman.
 * Released under the MIT License.
 */

'use strict';

function disableInputScroll (className) {
  document.addEventListener('wheel', () => {
    if (document.activeElement.type === 'number' &&
      document.activeElement.classList.contains(className)) {
      document.activeElement.blur();
    }
  });  
}

module.exports = function (className="no-scroll") {
  disableInputScroll(className);
}
