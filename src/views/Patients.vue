<script setup lang="ts">
import { useFHIRStore } from '@/stores/fhir';

const fhir = useFHIRStore();
</script>

<template>
    <table>
        <tr>
            <td>Name</td>
        </tr>
        <tr v-for="patient in fhir.Patient">
            <td>{{ patient.resource.name[0].family }}</td>
        </tr>
    </table>

    
</template>