<script setup lang="ts">
import { ref } from 'vue';

  const sum = ref();
  const arr = ref<HTMLInputElement[]>([]);
</script>

<template>
  <input :ref="(e: any) => arr.push(e)"> 
  + 
  <input :ref="(e: any) => arr.push(e)"> 
  <button @click="sum=Number(arr[0].value) + Number(arr[1].value)">=</button> 
  {{ sum }}
</template>