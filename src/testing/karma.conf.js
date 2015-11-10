// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-11-05 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    //autoWatchBatchDelay: 250,
    //restartOnFileChange: true,
    
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    //colored cli
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine",
      "chai"
    ],

    reporters:[
        //"progress",
        "html",
        "coverage"
    ],

    htmlReporter: {
        outputFile: 'test/results/index.html',
            
        // Optional 
        pageTitle: 'Unit Tests',
        subPageTitle: 'Test Results'
    },
    // optionally, configure the reporter
    coverageReporter: {
        type : 'html',
        dir : 'test/results/coverage/',
        subdir: function(browser){
            // normalization process to keep a consistent browser name accross different
            // OS's
            return browser.toLowerCase().split(/[ /-]/)[0];
        }
    },




    // base path, that will be used to resolve files and exclude
    basePath: './../',

    // list of files / patterns to load in the browser
    files: [
        //bower scripts
        "bower_components/angular/angular.js",
        "bower_components/angular-mocks/angular-mocks.js",
        "bower_components/angular-sanitize/angular-sanitize.js",

        //project scripts
        {
            pattern: "scripts/**/*.js",
        },
        //testing scripts
        {
            pattern: "tests/**/*.js",
        }
        
    ],

    // list of files / patterns to exclude
    exclude: [
    ],



    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'scripts/**/*.js': ['webpack']
    },
    webpack: {
        node : {
            fs: 'empty'
        },

        // Instrument code that isn't test or vendor code.
        module: {
            postLoaders: [{
                test: /\.js$/,
                exclude: /(tests|node_modules)\//,
                loader: 'istanbul-instrumenter'
            }]
        }
    },
    webpackMiddleware: {
        noInfo: true
    },




    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
        "PhantomJS",
        "Chrome",
        'IE'
    ],

    phantomjsLauncher: {
        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        exitOnResourceError: true
    },

    // web server port
    port: 43213,




    // Which plugins to enable
    plugins: [
        "karma-ie-launcher",
        "karma-chrome-launcher",
        "karma-phantomjs-launcher",

        "karma-jasmine",
        "karma-chai",

        "karma-htmlfile-reporter",
        "karma-coverage",
        "karma-webpack"
    ],

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
