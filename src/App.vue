<script setup>
import ToDo from "./components/ToDo.vue";
</script>

<template>
  <div class="bg-gray-100 h-screen pt-5">
    <div class="main-div border-2 p-5 pl-10 pr-10 shadow rounded-md bg-white">
      <h1 class="text-xl text-blue-600 font-medium mb-4">To-Do List</h1>
      <ToDo />
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
