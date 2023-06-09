import Vue from 'vue'
import App from './App.vue'
import './public-path'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

let instance = null;
let router = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/micro-app/' : '/',
    mode: 'history',
  });

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

// 增加 update 钩子以便主应用手动更新微应用
export async function update(props) {
  renderPatch(props);
}