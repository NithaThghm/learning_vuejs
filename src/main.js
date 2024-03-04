import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdCalculate, MdStickynote2Round } from "oh-vue-icons/icons";

addIcons(MdCalculate, MdStickynote2Round);

const app = createApp(App)

app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
