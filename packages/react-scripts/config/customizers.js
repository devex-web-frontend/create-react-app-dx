module.exports = {
	'CSS_MODULES': {
		config: {
			dev: 'style!css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
			prod: 'style!css?modules&camelCase&-autoprefixer&importLoaders=1!postcss'
		}
	}
};