'use strict';
const path = require('path')
//webpack-dev-server 启动服务器
const webpack = require('webpack');
const config = require('./config/')

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './js/app.js',
    es6: './js/es6/es6.js',
  },
  output: {
  	publicPath: config.publicPath,
    path: path.resolve(__dirname + config.publicPath),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/src',  // New
  },
  module: {
    rules: [
      {
        //test: /^((?=es6).)*\.js$/,
        test: /\.js$/,
        exclude: /^node_modules$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.css$/,
        exclude: /^node_modules$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
