import Vue from 'vue'
import App from './src/App.vue'

// mount
new Vue({
  el: '#app',
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
})
