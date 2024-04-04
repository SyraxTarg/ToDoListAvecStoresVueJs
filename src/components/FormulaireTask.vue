<script setup>
import { ref } from 'vue'

import { useTaskStore } from '@/stores/taskStore'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { tasks, isComplete, isTaskCompleted, getTasksLength } = storeToRefs(store)
const { newTask, completeTask, uncompleteTask } = store

const nouvelleTache = ref({
  task: '',
  isComplete: false
})

//j'appelle ma fonction depuis mon composant parent (app.vue)
import { defineEmits } from 'vue'
const emit = defineEmits(['ajouterTask'])
function emitEvent() {
  //il est important de mettre .value car sinon la valeur de mon ref ne sera pas visible
  emit('ajouterTask', nouvelleTache.value)
  nouvelleTache.value = {
    id: getTasksLength + 1,
    task: '',
    isComplete: false
  }
}
</script>

<template>
  <form @submit.prevent="ajouterTask" id="addTask">
    <div>
      <input id="task" v-model="nouvelleTache.task" placeholder="Add a task" class="form-control" />
    </div>
    <input type="submit" value="Add" @click="emitEvent" id="addBtn" class="btn btn-primary mb-2" />
  </form>
</template>

<style scoped>
#addTask {
  display: flex;
  flex-direction: row;
  gap: 2px;
}

#addBtn {
  background-color: rgb(3, 206, 104);
  color: white;
  border: none;
  border-radius: 2px;
}
</style>
