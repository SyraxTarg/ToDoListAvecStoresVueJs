<script setup>
import { ref, watch } from 'vue'
import TaskManager from './TaskManager.vue'
import FormulaireTask from './FormulaireTask.vue'
import UncompletedTasks from './UncompletedTasks.vue'
import CompletedTasks from './CompletedTasks.vue'
import TaskCounter from './TaskCounter.vue'

import { useTaskStore } from '@/stores/taskStore'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { tasks, isComplete, isTaskCompleted } = storeToRefs(store)
const { newTask, completeTask, uncompleteTask } = store

// const tasks = ref([
//   { id: 1, task: 'Faire les courses', isComplete: false },
//   { id: 2, task: 'Faire le menage', isComplete: true },
//   { id: 3, task: 'Faire à manger', isComplete: false }
// ])
const filtre = ref('Tout')
function ajouterTask(task) {
  // task.id = tasks.value.length + 1
  // tasks.value.push(task)
  newTask(task)
}

function setFilter(value) {
  filtre.value = value.submitter.value
}
</script>

<template>
  <div id="superDiv">
    <h1>TO-DO LIST</h1>
    <TaskCounter :tasks="tasks" />
    <div>
      <form @submit.prevent="setFilter" id="filtres">
        <input type="submit" value="Tout" name="filter" class="btnFiltre" />
        <input type="submit" value="A faire" name="filter" class="btnFiltre" />
        <input type="submit" value="Fait" name="filter" class="btnFiltre" />
      </form>
    </div>
    <div id="formulaire">
      <FormulaireTask @ajouterTask="ajouterTask" />
    </div>
    <div v-if="filtre === 'Tout' || !filtre">
      <TaskManager :tasks="tasks" />
    </div>
    <div v-else-if="filtre === 'A faire'">
      <UncompletedTasks :tasks="tasks" />
    </div>
    <div v-else>
      <CompletedTasks :tasks="tasks" />
    </div>
  </div>
</template>

<style scoped>
#superDiv {
  display: flex;
  flex-direction: column;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
  padding: 10px;
}
#filtres {
  display: flex;
  gap: 10px;
  justify-content: center;
}
h1 {
  text-align: center;
}
.btnFiltre {
  background-color: rgb(119, 0, 255);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
}
#formulaire {
  margin: 10px;
}
</style>
