'use strict';

const themeDir = 'longwood';
const baseThemePath = `web/themes/custom/${themeDir}/`;
const distPath = `${baseThemePath}/assets/dist/`;
const libPath = `${baseThemePath}/fractal/`;

/*
 * Require the path module
 */
const path = require('path');
const twigAdapter = require('@wondrousllc/fractal-twig-drupal-adapter');
const fractalCreateComponent = require('fractal-create-component');

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require('@frctl/fractal').create());
const twig = twigAdapter({
  handlePrefix: '@fractal/',
});

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Longwood');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set(
  'path',
  path.join(__dirname, `${libPath}`, 'patterns')
);

// Use Twig instead of handlebars
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

// Statuses
fractal.components.set('statuses', {
  proto: {
    label: 'Prototype',
    description: 'Do not implement.',
    color: '#c0392b',
  },
  wip: {
    label: 'WIP',
    description: 'Work in progress. Implement with caution.',
    color: '#e67e22',
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#27ae60',
  },
});

fractal.components.set('default.preview', '@preview');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, `${libPath}`, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, `${distPath}`));

fractal.web.set('builder.dest', 'fractal-build');

/**
 * Custom Fractal Theme
 */
const customTheme = require('@frctl/mandelbrot')({
  // skin: 'white',
  favicon: '/images/favicon.ico',
  styles: ['default', '/css/fractal.css'],
});

// Tell Fractal to use the configured theme by default
fractal.web.theme(customTheme);

// init fractal-create-component. Can fractal cc new-component to generate components
fractalCreateComponent.init(fractal);
