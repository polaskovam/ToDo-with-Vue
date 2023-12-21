<script setup>
import ToDo from "./components/ToDo.vue";
import { ref } from "vue";
import { onMounted, onUpdated } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

onUpdated(() => {
  initFlowbite();
});

const userInput = ref("");
const todos = ref([]);

const addToDo = () => {
  if (userInput.value.trim()) {
    todos.value.push({ id: Date.now(), userInput: userInput.value });
    userInput.value = "";
  }
};

const deleteToDo = (todoId) => {
  todos.value = todos.value.filter((todo) => todo.id !== todoId);
};

const updateCompletionStatus = ({ todoId, isCompleted }) => {
  const index = todos.value.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    todos.value[index].isCompleted = isCompleted;
  }
};

const updateUserInput = ({ todoId, newUserInput }) => {
  const index = todos.value.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    todos.value[index].userInput = newUserInput;
  }
};
</script>

<template>
  <div class="bg-gray-100 h-screen pt-5">
    <div class="main-div border-2 p-5 pl-10 pr-10 shadow rounded-md bg-white">
      <h1 class="text-xl text-blue-600 font-medium mb-4">To-Do List</h1>
      <div class="mb-3 ml-[4%]">
        <div class="mb-3">
          <label for="myInput" class="mr-2">New task</label>

          <input
            type="text"
            id="myInput"
            v-model="userInput"
            class="rounded-md"
            placeholder="Add a new todo"
            @keyup.enter="addToDo"
            @delete="deleteToDo"
          />
          <button
            class="ml-5 bg-blue-600 text-white rounded-md p-1 pr-3 pl-3"
            @click="addToDo"
          >
            Submit
          </button>
        </div>
        <div v-for="todo in todos" :key="todo.id">
          <ToDo
            :userInput="todo.userInput"
            :todoId="todo.id"
            @delete="deleteToDo"
            @toggleComplete="updateCompletionStatus"
            @updateUserInput="updateUserInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-left: 1%;
}
.main-div {
  margin: 0px 200px 0 200px;
  height: 300px;
}
</style>
