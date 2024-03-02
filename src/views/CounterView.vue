<script setup>
import {ref} from 'vue'
const count = ref(0)
</script>

<template>
    <div id="counter-wrapper">
        <h1>The Counter</h1>
        <h2>{{ count }}</h2>
        <div id="buttons-wrapper">
            <button @click="count--">-</button>
            <button @click="count++">+</button>
        </div>
    </div>
</template>

<style scoped>
#counter-wrapper {
    margin: auto;
    grid-column: 1 / -1;
    border: solid 1px red;
}

#buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>