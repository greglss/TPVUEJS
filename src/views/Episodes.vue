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


.episodes {
  color: #fff;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 5px;
}


.episode {
  width: 250px;
  height: 250px;
  background-color: #373737;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

</style>

<template>
  <div>
    <h1>Liste des épisodes</h1>
    <div class="episodes">
      <div class="episode" v-for="episode in episodes" :key="episode.id">
        <h1>{{ episode.name }}</h1>
        <h2>{{ episode.episode }}</h2>
        <p>{{ episode.air_date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      episodes: [],
    };
  },
  async mounted() {
    const response = await axios.get("https://rickandmortyapi.com/api/episode");
    this.episodes = response.data.results;
  },
};



</script>


