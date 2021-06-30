<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <WordCloud />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WordCloud from './components/word-cloud.vue'

export default defineComponent({
  name: 'App',
  components: {
    WordCloud
  }
})
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
