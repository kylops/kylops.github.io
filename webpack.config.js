const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
if (process.env.NODE_ENV === 'production') {
  console.log('building production')

  miniJsOptions = {
    test: /\.js(\?.*)?$/i,
    cache: true,
    extractComments: true,
    uglifyOptions: {
      ecma: 8,
      compress: {
        warnings: false,
      },
    }
  }
  miniCssOption = {
    minimize: true
  }
} else {
  console.log('building dev')

  miniJsOptions = {}
  miniCssOption = {}
}
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './assets/js/index.js',
  output: {
    filename: './build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'assets/js'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        },
      },
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, 'assets/scss'),

        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: miniCssOption

          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.min.css",
    }),
    new ProgressBarPlugin(),
    new UglifyJsPlugin(miniJsOptions)

    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./dist/library/library.json')
    // })
  ],
  optimization: {
    minimizer: [
      //   new UglifyJsPlugin(miniJsOptions)
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
    resolve: {
        alias: {
            '@': resolve('src')
          }
      
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: 'cheap-source-map',
}
