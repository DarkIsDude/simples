const path = require('path');

module.exports = {
    watch: true,
    entry: [
        path.resolve('./my.scss'),
        path.resolve('my.js')
    ],
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        contentBase: path.resolve('./'),
    },
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