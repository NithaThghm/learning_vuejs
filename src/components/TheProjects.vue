<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
        <div>
            <v-icon name="md-calculate" scale="1.35" />
        </div>
    </template>
    <template #heading>
        <RouterLink to="/projects/counter">Counter</RouterLink>
    </template>
    A very simple counter to learn Vue basics.
    Hands on Glass Ui.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
        <div>
            <v-icon name="md-stickynote2-round" scale="1.35" />
        </div>
    </template>
    <template #heading>
        <RouterLink to="/projects/note">Note</RouterLink>
    </template>
    A note taking app to learn more about Vue JS.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
        <div>
            <v-icon name="md-quiz" scale="1.35" />
        </div>
    </template>
    <template #heading>
        <RouterLink to="/projects/quiz">Quiz</RouterLink>
    </template>
    A small quizz game.
  </WelcomeItem>
</template>
