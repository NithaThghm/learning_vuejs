<script setup>
import { ref, onMounted } from 'vue'

const showModal = ref(false)
const cardText = ref("")
const cardsList = ref([])
const err = ref("")

const getRandomColor = function() {
  let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}

const addCard = function() {
    if (cardText.value.length < 10) {
        return err.value = "Text should be more than 10 characters."
    }
    
    cardsList.value.push({
        text: cardText.value,
        date: new Date(),
        color: getRandomColor()
    })

    showModal.value = false
    err.value = ""
}

</script>

<template>
    <main>
        <div id="notes-titles">
            <h1>Notes</h1>
            <button id="notes-add-btn" @click="showModal = true">+</button>
        </div>
        <div id="notes-board">
            <div v-for="card in cardsList" id="notes-card" :style="{backgroundColor: card.color}" >
                <p>{{ card.text }}</p>
                <div>Date : {{ card.date.toLocaleDateString('fr-FR') }}</div>
            </div>
        </div>
        <div v-if="showModal" id="overlay">
            <div id="notes-modal">
                <textarea v-model.trim="cardText" cols="30" rows="10"></textarea>
                <p v-if="err" style="color: red">{{ err }}</p>
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
}

#notes-card p{
    height: 90%;
    width: 100%;
}

#notes-card div{
    height: 10%;
    text-align: right;
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