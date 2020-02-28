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
export default function initSiteDefaults() {
  // Add keyboard user class
  window.addEventListener('keydown', handleFirstTab);
}
