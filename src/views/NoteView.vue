<script setup>
import { ref, onMounted } from 'vue'

const showModal = ref(false)
const cardText = ref("Test")
const cardsList = ref([])

const addCard = function () {
    return cardsList.value.push({
        text: cardText.value,
        date: new Date()
    })
}
console.log(cardText.value)
</script>

<template>
    <main>
        <div>{{ cardsList }}</div>
        <div id="notes-titles">
            <h1>Notes</h1>
            <button id="notes-add-btn" @click="showModal = true">+</button>
        </div>
        <div id="notes-board">
            <div id="notes-card">
                <p></p>
                <div>Date :</div>
            </div>
        </div>
        <div v-if="showModal" id="overlay">
            <div id="notes-modal">
                <textarea v-model="cardText" cols="30" rows="10"></textarea>
                <button id="notes-modal-add-btn" @click="addCard">Add card</button>
                <button id="notes-modal-close-btn" @click="showModal = false">Close</button>
            </div>
        </div>
    </main>

</template>

<style scoped>
main {
    position: relative;
    height: 100%;
    grid-column: 1 / -1;
}
#notes-titles{
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#notes-board{
    display: flex;
    align-items: start;
    justify-content: start;
    height: 90%;
    width: 100%;
    border: solid 1px red;
}
#notes-add-btn{
    height: 35px;
    width: 35px;
    border-radius: 50%;
}
#notes-card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 240px;
    width: 240px;
    color: black;
    border-radius: 14px;
    margin: 10px 5px;
    padding: 8px;
    background-color: aquamarine;
}

#notes-card p{
    height: 90%;
    width: 100%;
}

#notes-card div{
    height: 10%;
}
#overlay{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(25,25,25,0.8);
}
#notes-modal{
    background-color: white;
    height: 300px;
    width: 550px;
    padding: 15px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#notes-modal textarea{
    height: 75%;
}
#notes-modal-add-btn{
    height: 30px;
    background-color: green;
    color: white;
}
#notes-modal-close-btn{
    height: 30px;
    background-color: red;
    color: white;
}
</style>