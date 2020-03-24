function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('keyboard-user');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
/**
 * Site Default fucntions
 *
 */


function initSiteDefaults() {
  // Add keyboard user class
  window.addEventListener('keydown', handleFirstTab);
}

/**
 * Import js modules in fractal
 * Similar to app.js, but without the Drupalness
 */

(function () {
  initSiteDefaults();
})();

//# sourceMappingURL=fractal-app.js.map
