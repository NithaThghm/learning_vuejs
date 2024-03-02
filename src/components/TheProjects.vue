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
  </WelcomeItem>
</template>
