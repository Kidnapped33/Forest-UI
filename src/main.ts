import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../src/components/Home.vue";
import HelloWorld from "../src/components/HelloWorld.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/HelloWorld", component: HelloWorld },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
