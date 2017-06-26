<template>
    <div>
        <p>{{ d }}</p>
    </div>
</template>

<script>
    const Foo = {
        name: 'foo',
        data: function () {
            return {
                d: 'Foo view'
            }
        }
    }

    export default Foo
</script>

<style scoped>

</style>
