<script setup lang="ts">
import { ref } from 'vue';

const title = ref("This is a test!")
const name_input = ref();
const age_input = ref();
const color_input = ref();

function test() {
  const new_patient = {
    name: name_input.value.value,
    age: age_input.value.value,
    fav_color: color_input.value.value,
  }

  patients.value.push(new_patient)
}

const patients = ref([
  {
    name: "Fin",
    age: "34",
    fav_color: "blue",
  }
])

</script>

<template>
  <h1>{{ title }}</h1>

  <label>
    Name
    <input type="text" ref="name_input">
  </label><br>

  <label>
    Age
    <input type="number" ref="age_input">
  </label><br>

  <label>
    Color
    <input type="text" ref="color_input">
  </label><br>

  <button @click="test">Click me!</button>

  <hr>

  <div v-for="patient in patients">
    <ul>
      <li>Name: {{ patient.name }}</li>
      <li>Age: {{ patient.age }}</li>
      <li>Favorite Color: {{ patient.fav_color }}</li>
    </ul>
  </div>
</template>

<style scoped>
  label {
    display: block;
    width: 300px;
  }

  input {
    float: right;
  }

  hr {
    margin: 20px;
  }
</style>