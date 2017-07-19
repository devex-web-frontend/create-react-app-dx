'use strict';

const autoprefixer = require('autoprefixer');

const STYLE_LOADER = require.resolve('style-loader');

const CSS_LOADER = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: true,
    localIdentName: '[name]__[local]--[hash:base64:5]',
  },
};

const POSTCSS_LOADER = {
  loader: require.resolve('postcss-loader'),
  options: {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
    ],
  },
};

const SCSS_LOADER = require.resolve('sass-loader');

const STYLUS_LOADER = {
  loader: require.resolve('stylus-loader'),
  options: {
    nocheck: true,
    'include css': true,
    'resolve url': true,
  },
};

module.exports = {
  STYLE_LOADER,
  CSS_LOADER,
  POSTCSS_LOADER,
  SCSS_LOADER,
  STYLUS_LOADER,
};
