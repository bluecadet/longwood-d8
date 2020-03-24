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

(function ($, Drupal, drupalSettings) {
  initSiteDefaults(); // eslint-disable-next-line no-undef
})(jQuery, Drupal, drupalSettings);

//# sourceMappingURL=app.js.map
