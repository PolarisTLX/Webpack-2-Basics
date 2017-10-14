var path = require('path');
//to use the minification plugin, requires this:
var webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //put your loaders in the "use: []" array.
        //NOTE: they are run backwards for some reason
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    //this is the minification / compression plugin
    new webpack.optimize.UglifyJsPlugin({
      // ...
    })
  ]
};
