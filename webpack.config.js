var path = require('path');
var webpack = require('webpack');

var ROOT = path.resolve(__dirname);


module.exports = {
  // entry: path.resolve(ROOT),
  output: {
    path: path.resolve(ROOT, '/source/css')
  },
  loaders: [
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: path.resolve(ROOT, '/source/scss')
    },
    // {
    //   test: /\.(jpg|png)$/,
    //   loader: 'url?limit=40000'
    // }
  ]
}
