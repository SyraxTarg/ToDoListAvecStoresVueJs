import { defineStore } from 'pinia'
export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        id: 0,
        task: 'task1',
        isComplete: false
      },
      {
        id: 1,
        task: 'task2',
        isComplete: false
      },
      {
        id: 2,
        task: 'task',
        isComplete: false
      }
    ]
  }),
  getters: {
    isTaskCompleted: (state) => {
      state.isComplete
    },
    compteurFait: (state) => {
      return state.tasks.filter((task) => task.isComplete).length
    },
    compteurAFaire: (state) => {
      return state.tasks.filter((task) => !task.isComplete).length
    },
    getTasksLength: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    newTask(task) {
      this.tasks.push(task)
    },
    completeTask() {
      this.isComplete = true
    },
    uncompleteTask() {
      this.isComplete = false
    },
    removeTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
})
