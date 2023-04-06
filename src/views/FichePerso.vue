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
        <p>{{ data.status }}</p>
    </div>
</template>

<style scoped></style>
