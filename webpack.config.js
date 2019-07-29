const path                    = require('path');
const { VueLoaderPlugin }     = require('vue-loader');
const TerserJSPlugin          = require('terser-webpack-plugin');
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
		app : './app.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(sa|sc|c)ss$/,
	      use: [
	        {
	          loader: MiniCssExtractPlugin.loader,
	          options: {
	            hmr: process.env.NODE_ENV === 'development',
	          },
	        },
	        'css-loader',
	        'sass-loader',
	      ]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	},
	resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
			'Root': path.resolve(__dirname),
			'@': path.resolve(__dirname, 'src/')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})], // override the minify of webpack
  },
	plugins: [
		/** extract scss/css files **/
		new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
		new VueLoaderPlugin()
	]
}