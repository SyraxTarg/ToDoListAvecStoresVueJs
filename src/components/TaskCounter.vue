<script setup>
import { ref, watch } from 'vue'

import { useTaskStore } from '@/stores/taskStore'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { tasks, isComplete, compteurFait, compteurAFaire } = storeToRefs(store)
const { newTask, completeTask, uncompleteTask } = store
</script>

<template>
  <div id="compteur">
    <h3>Fait: {{ compteurFait }}</h3>
    <h3>A faire: {{ compteurAFaire }}</h3>
  </div>
</template>

<style scoped>
.complete {
  text-decoration: line-through;
}
#compteur {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}
</style>
