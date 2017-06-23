<template>
    <div>
        <p class="test">{{ test }}</p>
    </div>
</template>

<script>
    const Test = {
        name: 'Test',
        data: function () {
            return {
                test: 'you data..'
            }
        }
    }

    export default Test
</script>

<style scoped>
    .test { color: blue; }
</style>
