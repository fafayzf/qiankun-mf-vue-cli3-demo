const MF = require('mf-webpack4')
const { name } = require('./package')

module.exports = {
  parallel: false,
  devServer: {
    port: 9006,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
    plugins: [
      // new MF({
      //   name: "vuecli",
      //   filename: 'vuecli_remote',
      //   remotes: {
      //     "vuecliremote": "vuecliremote@http://localhost:9004/$_mfplugin_remoteEntry.js"
      //   },
      //   shared: {
      //   }
      // })
    ]
  }
}