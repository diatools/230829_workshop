import { defineStore } from "pinia";
import FHIR from "fhirclient"
import { ref } from "vue";


export const useFHIRStore = defineStore("fhir", () => {
    const client = FHIR.oauth2.ready();

    const Patient = ref([]);

    async function getPatients() {
        return (await client).request("Patient").then(patient => {
            console.log(patient.entry);
            Patient.value = patient.entry
        });
    }

    getPatients();
    
return { Patient }

});
