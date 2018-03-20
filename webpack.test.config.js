var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'tests');
var MI_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'tests/__test__');


var config = {
  entry: APP_DIR + '/test.js',
  output: {
    path: BUILD_DIR,
    filename: 'gsb_calendarEh_test.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/, //loader property should specify what are the file extension it has to process via the test property
        include : [APP_DIR, MI_DIR], 
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;