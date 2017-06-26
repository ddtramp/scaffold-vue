<template>
    <div id="message">
        <h3>{{ message }}</h3>
        <Test></Test>

        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import Test from './components/Test.vue'

    const App = {
        name: 'App',
        data () {
            return {
                message: 'lalala...'
            }
        },
        components: {
            Test
        }
    }

    export default App
</script>

<style scoped>
    #message {
        color: red;
    }
</style>
