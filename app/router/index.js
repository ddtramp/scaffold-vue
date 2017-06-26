/**
 * Created by jack on 26/06/2017.
 */

import Vue from 'vue'
import Router from 'vue-router'

import Bar from '../components/Bar.vue'
import Foo from '../components/Foo.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/foo',
            name: 'foo',
            component: Foo
        },
        {
            path: '/bar',
            name: 'bar',
            component: Bar
        }
    ]
})
