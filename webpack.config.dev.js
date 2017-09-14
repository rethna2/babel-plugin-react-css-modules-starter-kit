var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
				use: [{
					loader: 'style-loader'
					}, {
						loader: 'css-loader',
						options: {
							importLoader: 1,
							modules: true,
							localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
						}
					}

				]
			}
		]
	},
	devServer:{
		contentBase:path.join(__dirname, "build"),
		compress:true, //gzip
		port:9000,
		hot:true
	},
	plugins:[new HtmlWebpackPlugin({
			title:'Babel Plugin CSS React Modules - Starter Kit',
			minify:{
				collapseWhitespace:true
			},
			hash:true,
			template:'./index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
}