<template>
  <div>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    computed: mapGetters(['count']),
    methods: {
      ...mapActions(['increment', 'decrement']),
    },
    head() {
      return {
        title: 'Welcome to WeatherMaps',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'The best WeatherMaps on this side of the Mississippi',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  button {
    cursor: pointer;
    background-color: #fff;
    display: block;
    padding: 7.5px 20px;
    border: 1.75px solid rebeccapurple;
    margin: 25px;
  }
  p {
    margin: 0 70px;
    font-size: 20px;
  }
</style>
