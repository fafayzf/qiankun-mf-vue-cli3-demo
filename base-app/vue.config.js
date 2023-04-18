const MF = require('mf-webpack4')

module.exports = {
  devServer: {
    port: 9004,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  parallel: false,
  publicPath: "http://localhost:9004",
  chainWebpack(chain) {
    chain.optimization.splitChunks().clear()
    // chain.plugin('moduleFederation')
    //   .use(MF, [{
    //     name: "vuecliremote",
    //     filename: 'remoteEntry.js',
    //     exposes: {
    //       "./util": "./src/utils/index.js"
    //     }
    //   }])
  },
}