<script setup lang="ts">
import { ref } from 'vue';

const inp1 = ref("1");
const inp2 = ref("2");

const opts = {
  checked: false,
  disabled: true,
}

</script>

<template>
  <input type="checkbox" v-bind="opts">
  <input v-model="inp1">
  +
  <input v-model="inp2">
  =
  {{ Number(inp1) + Number(inp2) }}
</template>