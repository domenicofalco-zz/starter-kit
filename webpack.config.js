// dependencies
const webpack = require('webpack')
const path = require('path')

/// webpack configuration
const config = {
  context: path.resolve(__dirname, './'),
  entry: {
    main: './dev/js/'
  },
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundle.[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, './dev'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }],
              ['react']
            ]
          }
        }]
      }
    ]
  }
}

module.exports = config
