var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist/js');


var config = {
  entry: APP_DIR + '/prod.js',
  output: {
    path: BUILD_DIR,
    filename: 'gsb_calendarEh.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/, //loader property should specify what are the file extension it has to process via the test property
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;