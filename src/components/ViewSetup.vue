<template>
  <form class="view-setup">
    <div class="input-group">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        v-model="formData.name"
        placeholder="Eliut"
      />
    </div>
    <div class="input-group">
      <label for="height">Height</label>
      <input
        type="number"
        min="10"
        step="0.10"
        name="height"
        v-model="formData.height"
        placeholder="e.g: 173 (cm)"
      />
    </div>
    <div class="input-group">
      <label for="color">Color</label>
      <input type="color" name="color" v-model="formData.color" />
    </div>
  </form>
  <button @click="$emit('click', formData)">ADD</button>
</template>

<script>
import { reactive } from "vue";
export default {
  emits: ["click"],
  setup() {
    const formData = reactive({
      name: null,
      height: 10, // in cm
      color: "#000000",
    });
    return { formData };
  },
};
</script>

<style scoped>
.view-setup {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
}
.input-group {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 1rem;
  height: fit-content;
}
.input-group input {
  height: 40px;
  border: 0;
  outline: none;
  padding: 0.3rem;
}
.input-group label {
  display: block;
  text-align: center;
  height: 40px;
  background: #f2f2f2;
  padding: 0.3rem;
  color: #ccc;
  transition: all 0.2s;
  line-height: 40px;
  padding-top: 3px;
}
button {
  width: 50%;
  margin: 0.3rem auto;
  height: 40px;
  background: #ccc;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  cursor: pointer;
}
</style>
