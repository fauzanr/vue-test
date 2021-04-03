<script>
export default {
  name: 'Calculator',
  data() {
    return {
      input1: parseInt(localStorage.getItem('input1'), 10) || null,
      input2: parseInt(localStorage.getItem('input2'), 10) || null,
      result: parseInt(localStorage.getItem('result'), 10) || null,
      error: '',
    }
  },
  mounted() {
    this.setCache()
  },
  methods: {
    calculate() {
      this.error = ''
      if (typeof this.input1 === 'number' && typeof this.input2 === 'number') {
        this.result = this.input1 + this.input2
      } else {
        this.error = 'Inputs must be number'
      }
      this.setCache()
    },
    setCache() {
      localStorage.setItem('input1', this.input1)
      localStorage.setItem('input2', this.input2)
      localStorage.setItem('result', this.result)
    }
  }
}
</script>

<template>
  <form @submit="e => e.preventDefault() && calculate()">
    <section class="row">
      <h1>Calculator</h1>
      <div class="column">
        <input type="number" class="break" v-model.number="input1" @change="setCache()">
        <h1 class="break">+</h1>
        <input type="number" class="break" v-model.number="input2" @change="setCache()">
        <h1 class="break">=</h1>
        <input type="number" class="break" disabled :value="result">
      </div>
      <br>
      <button type="submit" v-on:click="calculate()">Add</button>
      <small v-if="error">{{ error }}</small>
    </section>
  </form>
</template>

<style scoped>
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .column {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  input {
    margin-right: 0;
  }
  h1 {
    text-align: center;
  }
  small {
    color: red;
  }
</style>