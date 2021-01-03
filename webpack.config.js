var webpack = require('webpack');
var path = require('path');
const glob = require('glob');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var PurgeCSSPlugin = require('purgecss-webpack-plugin')

module.exports = {
    entry: {
        app: [
            './src/main.js',
            './src/main.scss',
            './src/main.css',
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

        new PurgeCSSPlugin({
            paths: glob.sync(`index.html`,  { nodir: true })
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { url: false}
                    },
                    'sass-loader'
                ]
            },
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: { url: false}
            //         }
            //     ]
            // },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};