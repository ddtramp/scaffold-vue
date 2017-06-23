import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import Test from './Test.vue'
new Vue({
    el: '#example',
    data: {
        message: "Hello Vue"
    },
    components: {
        App,
        Test
    }
})