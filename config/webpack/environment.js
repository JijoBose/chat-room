import { environment } = require('@rails/webpacker')
import webpack = require('webpack')

environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jquery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)

export default environment
