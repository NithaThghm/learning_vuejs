<script setup>
    import {ref} from 'vue'
</script>

<template>
    <main>
        <div>
            <header>
                <h1>Quiz</h1>
                <input type="text">
            </header>
        </div>
        <div class="quizes-container">

        </div>
        <div>

        </div>
    </main>
</template>

<style scoped>
main {
    position: relative;
    height: 100%;
    grid-column: 1 / -1;
}
h1 {
    color: white;
}
</style>