var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    index: './coffee/index.coffee'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name]-[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: ['coffee-loader']
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', 'sass-loader'],
          publicPath: "../"
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
          publicPath: "../"
        })
      }, {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: ['vue-style-loader', 'css-loader', 'sass-loader']
            }
          }
        }]
      }, {
        test: /\.(png|jpg|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      }
    ]
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },

  plugins: [
    new ExtractTextPlugin('css/[name]-[contenthash].css'),
    new HtmlWebpackPlugin({template: 'template/index.html'}),
    new CopyWebpackPlugin([{from: 'img/*'}])
  ]
}
