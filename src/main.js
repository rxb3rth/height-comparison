import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.directive("color", {
  // this will be called as `mounted` and `updated`
  mounted(el) {
    const stroke = el.style.getPropertyValue("--bc");
    const fill = el.style.getPropertyValue("--bg");
    el.querySelector("path").setAttribute("stroke", `rgb(${stroke})`);
    el.querySelector("path").setAttribute("fill", `rgba(${fill}, 0.35)`);
  },
});

app.mount("#app");
