import '@babel/polyfill';

import initSiteDefaults from './modules/init.js';

// eslint-disable-next-line no-unused-vars
(($, Drupal, drupalSettings) => {

  initSiteDefaults();

  // eslint-disable-next-line no-undef
})(jQuery, Drupal, drupalSettings);
