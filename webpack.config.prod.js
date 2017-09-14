var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
							loader: 'css-loader',
							options: {
								importLoader: 1,
								modules: true,
								localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
							}
						}

					]
				})
			}
		]
	},
	plugins:[new HtmlWebpackPlugin({
			title:'Babel Plugin CSS React Modules - Starter Kit',
			minify:{
				collapseWhitespace:true
			},
			hash:true,
			template:'./index.html'
		}),
		new ExtractTextPlugin('styles.css')
	]
}