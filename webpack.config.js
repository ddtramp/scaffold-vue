let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let OpenBrowserPlugin = require('open-browser-webpack-plugin')

let path = require('path')

module.exports = {
    // 这是一个主文件包括其他模块
    devtool: 'cheap-eval-source-map', // source map 调试

    entry: path.join(__dirname, '/app/main.js'),
    output: {
        path: path.join(__dirname, '/dist'), // eslint-disable-line
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' } // 在webpack的module部分的loaders里进行配置即可
                ]
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'vue-loader' } // 在webpack的module部分的loaders里进行配置即可
                ]
            },
      ]
    },

    plugins: [
        new webpack.BannerPlugin('Copyright jackwang'), // 在这个数组中new一个就可以了
        new HtmlWebpackPlugin({ // eslint-disable-next-line
            template: path.join(__dirname, '/app/index.tmpl.html') // new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载插件
        new OpenBrowserPlugin({ url: 'http://localhost:' + 8080 })
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: true
    }
}
