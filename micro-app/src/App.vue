<template>
  <div id="app">
   子应用内容，接收的内容：{{baseApp}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseApp: ''
    }
  },
  mounted() {
    import('base_remote/util').then(res => {
      this.baseApp = res.baseApp()
    })
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
