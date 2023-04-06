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
<div>
    <h1>Liste des personnages</h1>
    
    <div class="recherchebox">
        <label for="recherche">Rechercher un personnage</label>
        <input type="text" id="recherche" v-model="recherche" placeholder="rechercher">
        <button @click="rechercher">rechercher</button>
        <div>
            <button @click="suivant">suivant</button></div>
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
};



const rechercher = async () => {
  data.value = await fetch(`https://restcountries.com/v3.1/name/${recherche.value}`)
      .then(async (response) => await response.json())
      .then((data) => data)
}


</script>

  
