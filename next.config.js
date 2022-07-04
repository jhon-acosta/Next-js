const withLess = require('next-with-less')

module.exports = () => {
  return withLess({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {},
      },
    },

    webpack: (config, options) => {
      config.resolve.alias['~'] = __dirname
      return config
    },
  })
}
