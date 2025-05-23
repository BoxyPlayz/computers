module.exports = {
  plugins: {
    'postcss-custom-properties': {
      preserve: false,
    },
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-properties': { preserve: false }
      }
    },
    'postcss-css-variables': {
      
    }
  }
}