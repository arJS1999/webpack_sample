const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/init.js', // Entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist/bundle.js'),
    port: 4000,
    hot: true,
  },
  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      crypto: require.resolve('crypto-browserify'),
      fs: false,
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      string_decoder: require.resolve('string_decoder/'),
      buffer: require.resolve("buffer/"),
      assert: require.resolve("assert/"),
      net: require.resolve("net/"),
      url: require.resolve("url/")
    },
  },
  module: {
    rules: [
      // add your rules here
    ],
  },
  plugins: [
    // add your plugins here
  ],
};