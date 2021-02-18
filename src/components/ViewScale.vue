<template>
  <div class="view-scale">
    <div
      class="scale-graduation"
      v-for="scale in scaleGraduations"
      :key="scale"
    >
      <small>{{ scale * 10 }} cm</small>
      <small>{{ scale * 10 }} cm</small>
    </div>
    <div class="people">
      <div
        class="person"
        v-for="(person, index) in people"
        :key="index"
        :style="{ height: getHeight(person.height), left: `${10 * index}%` }"
      >
        <div class="person__name">
          {{ person.name }}
        </div>
        <div class="person__height">{{ person.height }} cm</div>
        <Vector
          v-color
          :style="`--bc: ${hex2rgba(person.color)}; --bg: ${hex2rgba(
            person.color
          )}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import Vector from "../assets/vector.svg";

defineProps({
  people: {
    type: Array,
    required: true,
  },
});

const maxValue = ref(200); // Value in cm
const steps = 10;
const scaleGraduations = computed(() => maxValue.value / steps);

const getHeight = (height) => `${(height * 100) / maxValue.value}%`;

const hex2rgba = (hex) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `${r},${g},${b}`;
};
</script>

<style scoped>
.view-scale {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: calc(100vh - 25%);
  background: #f2f2f2;
}
.scale-graduation {
  padding: 0.3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex: 1;
  border-bottom: 1px solid #ccc;
}
.scale-graduation small {
  color: #999;
}
.people {
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.person {
  position: absolute;
  bottom: 0;
  width: fit-content;
  text-align: center;
}
.person__name,
.person__height {
  position: relative;
  top: 0;
}
.person svg#svg {
  height: 100%;
}
</style>
