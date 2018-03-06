var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, '');
var BUILD_DIR = path.resolve(__dirname, 'dist');


var config = {
  entry: APP_DIR + '/gsb_calendarEh.js',
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
};

module.exports = config;