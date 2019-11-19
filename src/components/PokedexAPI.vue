<template>
  <div>
    <h1 id = "pokedatatext">{{ msg }}</h1>  
    <div>
        {{ pokedata }}
    </div>    
  </div>  
</template>

<script>

export default {   
  data () {
    return {
      msg: 'Pokemon Data',
      searchpokemon: 'pikachu',
      pokedata: ''
    }
  },
  // computed: {
  //   pokemon(){
  //     return this.$store.state.pokemon
  //   }
  // },
  computed: {
    getpokemonfromAPI(searchpokemon){
      if(this.searchpokemon){
        const url = `https://pokeapi.co/api/v2/pokemon/${this.searchpokemon}`;
        fetch(url)
        .then(response => response.json())
        .then(data => this.pokedata  = data)
      }

    }
  }
}
</script>

<style scoped>
  #pokedatatext {
    color: red;
  }


</style>
