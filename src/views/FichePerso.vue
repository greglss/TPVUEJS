<script setup>

import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const route = useRoute()

let id = route.params.id

const data = ref(null)

onMounted(async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    data.value = await response.json()
})

</script>
<template>
    <div class="app">
        <div :key="data.id"> </div>
        <img :src="data.image" alt="">
        <h2>{{ data.name }}</h2>
    </div>
</template>

<style scoped></style>

j'ai ce code


http://localhost:5173/%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name:%20'fiche-perso',%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20params:%20%7B%20id:%20character.id%20%7D%20%20%20%20%20%20%20%20%20%20%20%20%7D