<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import LoadingComponent from "./components/LoadingComponent";
import ErrorComponent from "./components/ErrorComponent";

const AsyncComponent = import("./components/HelloWorld.vue");

const delayedAsyncComponent = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./components/HelloWorld.vue"));
    }, 2000);
  });
};

export default {
  name: "app",
  components: {
    HelloWorld: () => ({
      component: AsyncComponent,
      // component: delayedAsyncComponent(),
      loading: LoadingComponent,
      error: ErrorComponent
      // optional delay before showing the loading component
      // delay: 200
      // optional timeout before showing the error component
      // timeout: 0
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
