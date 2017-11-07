const path = require('path');
const webpack = require('webpack');

module.exports = {
    watch: true,
    entry: path.resolve('./src/my.js'),
    output: {
        path: path.resolve('./', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        hot: true,
        host: "0.0.0.0",
        port: 8080,
        contentBase: path.resolve('./'),
        inline: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    }
  };