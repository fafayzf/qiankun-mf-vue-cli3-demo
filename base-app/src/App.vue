<template>
  <div id="app">
    主应用
    <div ref="container" />
  </div>
</template>
<script>
import { loadMicroApp } from 'qiankun'
export default {
  name: 'App',
  mounted() {
    // 2种方法任选其一
    // 1. 可以设置entry来加载子应用的app.js
    loadMicroApp({
      name: 'micro-app',
      entry: {
        scripts: ['//localhost:9006/app.js'],
        html: "<div id=app></div>"
      },
      container: this.$refs['container'],
    })

    // 2. 子应用已经对html-webpack-plugin做过去除mf入口的处理, 可以解析子应用的html加载子应用
    // loadMicroApp({
    //   name: 'micro-app',
    //   entry: "//localhost:9006",
    //   container: this.$refs['container'],
    // })
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: '/micro-app'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
