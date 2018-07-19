<template>
  <div id="app">
    <ArticleCardWithLoader id="1"></ArticleCardWithLoader>
  </div>
</template>

<script>
import ArticleCard from "./components/ArticleCard.vue";
import withLoader from "./withLoader";
const ArticleCardWithLoader = withLoader(ArticleCard);

export default {
  name: "app",
  components: {
    ArticleCardWithLoader
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
