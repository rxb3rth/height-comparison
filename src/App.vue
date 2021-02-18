<template>
  <div class="view-wrapper">
    <ViewSetup @click="handleClick" />
    <ViewScale :people="people" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import ViewSetup from "./components/ViewSetup.vue";
import ViewScale from "./components/ViewScale.vue";

const people = ref([]);

const handleClick = (person) => {
  people.value.push({ ...person });
  // Reset form
  person.value = {
    name: null,
    height: 10, // in cm
    color: "#000000",
  };
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.view-wrapper {
  display: grid;
  grid-template-rows: 10% auto;
}
</style>
