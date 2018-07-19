<template>
  <div class="article-card">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h2>{{title}}</h2>
      {{body}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    title: String,
    body: String
  }
};
</script>

<style scoped>
.article-card {
  border-top: 2px solid #555;
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
