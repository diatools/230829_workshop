<script setup lang="ts">
import { ref } from 'vue';

const sum = ref();
const inp1 = ref();
const inp2 = ref();

function do_the_job() {
  sum.value = Number(inp1.value) + Number(inp2.value);
}
</script>

<template>
  <input ref="inp1">
  +
  <input ref="inp2">
  <button @click="do_the_job">=</button>
  {{ sum }}
</template>