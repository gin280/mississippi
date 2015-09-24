/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        "vendor/insipinia",
        "bower_components/font-awesome/scss"
      ]
    },

    'ember-cli-bootstrap-sassy': {
        glyphicons: false
        // js: ['transition', 'collapse']
    },

    autoprefixer: {
      browsers: ['> 5% in CN', 'last 2 versions']
    }
  });

  app.import("vendor/js/plugins/metisMenu/jquery.metisMenu.js");
  app.import("vendor/js/plugins/slimscroll/jquery.slimscroll.min.js");
  // app.import("vendor/js/inspinia.js");
  app.import("vendor/js/plugins/pace/pace.min.js");

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
