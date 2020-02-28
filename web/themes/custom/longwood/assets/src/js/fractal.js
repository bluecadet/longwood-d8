/**
 * Fractal Style guide js
 *
 */
function getTitleFontSizes() {
  const els = document.getElementsByClassName('fractal-type-size');

  Array.prototype.forEach.call(els, el => {
    var parent = el.parentNode;
    var text = parent.previousElementSibling;
    el.getElementsByTagName('span')[0].innerHTML = window
      .getComputedStyle(text, null)
      .getPropertyValue('font-size');
  });
}

(function() {
  getTitleFontSizes();

  window.addEventListener('resize', () => {
    getTitleFontSizes();
  });
})();
