module.exports = {
    type: 'react-component',
    npm: {
        esModules: true,
        umd: {
            global: 'ReactCountrySelect',
            externals: {
                react: 'React'
            }
        },

        webpack: {
            module: {
                loaders: [{
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                }]
            }
        }
    }
}
