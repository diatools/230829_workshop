<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore(); 
</script>

<template>
    Just the counter {{ counter.count }}
    <button @click="counter.increment">+++</button>
</template>