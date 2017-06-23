<template>
    <div>
        <div class="message">{{ msg }}</div>
        <div class="message">Value is: {{ count }}</div>
        <a href="#" @click.prevent="increment">Increment</a>
    </div>
</template>

<script>
    const App = {
        name: 'App',
        data () {
            return {
                msg: 'Hello from vue-loader! lalala...',
                count: 0
            }
        },
        methods: {
            increment () {
                this.count ++;
            },
            dd () {
                return 123
            }
        }
    }

    export default App
</script>

<style scoped>
    .message {
        color: red;
    }
</style>
