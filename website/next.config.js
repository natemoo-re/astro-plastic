const withTM = require('next-transpile-modules')(['react-github-btn'])

module.exports = withTM({
  future: {
    webpack5: true,
  },
})
