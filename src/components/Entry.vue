<script setup></script>

<template>
  <div class="mb-3 ml-[4%]">
    <label for="myInput" class="mr-2">New task</label>
    <input
      type="text"
      id="myInput"
      v-model="textInput2"
      class="rounded-md"
      placeholder="Add a new todo"
    />
    <button
      @click="submitForm"
      class="ml-5 bg-blue-600 text-white rounded-md p-1 pr-3 pl-3"
    >
      Submit
    </button>
  </div>
</template>

<style scoped></style>
