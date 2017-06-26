<template>
    <div>
        <p>{{ d }}</p>
    </div>
</template>

<script>
    const Bar = {
        name: 'bar',
        data: function () {
            return {
                d: 'Bar view'
            }
        }
    }

    export default Bar
</script>

<style scoped>

</style>
