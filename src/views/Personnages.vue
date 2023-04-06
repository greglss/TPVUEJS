<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1{
  text-align: center;
  margin-top: 10px;
  color: rgb(66, 251, 66);
}


.persodash {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

img{
    width: 300px;
    height: 300px;
    border-radius: 5px;
}

.personame{
    text-align: center;
    color: rgb(66, 251, 66);
}

.recherchebox{
    color: rgb(66, 251, 66);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 5px;
}

</style>


<template>

    <h1>Liste des personnages</h1>
    
    <div class="recherchebox">
    
      <input v-model="recherche" placeholder="edit me">

      <button @click="chercher">Rechercher</button>
        <div>
            <button @click="suivant">suivant</button>
        </div>
    </div>
        <div class="persodash">
        <div v-for="character in characters" :key="character.id" class="perso">
            <img :src="character.image" alt="">
            <h2 class="personame">{{ character.name }}</h2>
            <router-link to="{
                name: 'fiche-perso',
                params: { id: character.id }
            }">Infos du personnages</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  data() {
    return {
      characters: [],
    };
  },
  async mounted() {
    const response = await axios.get("https://rickandmortyapi.com/api/character");
    this.characters = response.data.results;
  },
}

const recherche = ref('')
let data = ref([])

const chercher = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character' + recherche.value)
    data.value = response.data
}


const suivant = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character?page=2')
    data.value = response.data
}




</script>

  

