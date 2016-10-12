module.exports = {
    type: 'react-component',
    npm: {
        esModules: true,
        umd: {
            global: 'ReactCountrySelect',
            externals: {
                react: 'React'
            }
        }
    }
}
