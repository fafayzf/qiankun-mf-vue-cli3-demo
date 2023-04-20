const MF = require('mf-webpack4')
const { name } = require('./package')

module.exports = {
  publicPath: "http://localhost:9006",
  parallel: false,
  devServer: {
    port: 9006,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
    plugins: [
      new MF({
        name: "micro_remote",
        filename: 'micro_remote_entry.js',
        remotes: {
          base_remote: 'base_remote@http://localhost:9004/base_remote_entry.js'
        }
      })
    ]
  },
  chainWebpack(config) {
    config.optimization.splitChunks().clear()
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.plugin("html").tap(args => {
      args[0].excludeChunks = ["$_mfplugin_remoteEntry"]
      return args
    })
    return config
  }
}