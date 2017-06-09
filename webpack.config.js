var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./config/helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
  output: {
    path: helpers.root('dist'),
    publicPath: '/angular2/',//publicPath: 'http://localhost:8080/', for dev
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('src', 'tsconfig.json') }
          }, 
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ 
          //publicPath: '/',
          fallback: 'style-loader', 
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[ext]'
      }
    ]
  },
  plugins: [
    //Fix for warning
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src')
    ),

    new ExtractTextPlugin('[name].css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    /* for production
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
    */
  ]
}