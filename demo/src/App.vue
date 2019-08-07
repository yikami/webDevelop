<template>
  <div id="app">
    <input v-model="text" type="text">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  data: () => {
    return {
      text: ""
    };
  },
  components: {
    HelloWorld
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get('/').then((res) => {
        this.text = res.data;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
