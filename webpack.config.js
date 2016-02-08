
module.exports = {
	
	// the main entry point of our app
	entry: ['./src/index.js', './src/auth/index.js'],
	// output conjfiguration
	output: {
		path: __dirname + '/build',
		publicPath: 'build/',
		filename: 'build.js'
	},

	module: {
		loaders: [
			//process *.vue files using vue-loader
			{ test: /\.vue$/, loader: 'vue'},
			//process *.js using babel-loader
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
		]
	},

	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	}
}
