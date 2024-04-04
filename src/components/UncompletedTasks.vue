<script setup>
// const props = defineProps({
//   tasks: Array
// })
import { useTaskStore } from '@/stores/taskStore'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { tasks, isComplete, isTaskCompleted } = storeToRefs(store)
const { newTask, completeTask, uncompleteTask, removeTask } = store
</script>

<template>
  <div>
    <ul
      v-for="task in tasks"
      :key="task.id"
      class="list-group list-group-flush"
      id="uncompletedList"
    >
      <li v-show="!task.isComplete" class="list-group-item">
        <input
          type="checkbox"
          name="uncomplete"
          id="{{ task.id }}"
          v-model="task.isComplete"
          class="form-check-input"
        />
        <p :class="{ complete: task.isComplete, incomplete: !task.isComplete }">
          {{ task.task }}
        </p>
        <button @click="removeTask(task)" class="btn">remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.complete {
  text-decoration: line-through;
}
#uncompletedList {
  box-shadow: 2px 2px rgba(178, 178, 179, 0.678);
}
/* .btn {
  background-color: #00bfa6;
  padding: 14px 40px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px dashed #00bfa6;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.4s;
}

.btn span:last-child {
  display: none;
}

.btn:hover {
  transition: 0.4s;
  border: 2px dashed #00bfa6;
  background-color: #fff;
  color: #00bfa6;
}

.btn:active {
  background-color: #87dbd0;
} */
.btn {
  padding: 1rem 2rem;
  font-weight: 700;
  background: rgb(255, 255, 255);
  color: rgb(3, 206, 104);
  border-radius: 0.5rem;
  border-bottom: 2px solid rgb(3, 206, 104);
  border-right: 2px solid rgb(3, 206, 104);
  border-top: 2px solid white;
  border-left: 2px solid white;
  transition-duration: 1s;
  transition-property: border-top, border-left, border-bottom, border-right, box-shadow;
}

.btn:hover {
  border-top: 2px solid rgb(3, 206, 104);
  border-left: 2px solid rgb(3, 206, 104);
  border-bottom: 2px solid rgb(119, 0, 255);
  border-right: 2px solid rgb(119, 0, 255);
  box-shadow:
    rgba(240, 46, 170, 0.4) 5px 5px,
    rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px;
}
</style>
