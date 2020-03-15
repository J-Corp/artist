<template>

<div id="search">
      <input @keyup.enter="getArtistAndEvents()" placeholder="Search artist by name..." v-model="query" type="text"/>
      <h5 v-if="query">Searching for <i><b>{{query}}</b></i></h5>
      <img  v-if="loading && query" src="./../assets/loading.gif" />
      <div v-if="artist.name != null"> 
        <Artist :artist="artist"  />
        <br>
        <div>
          <Events :events="events" />
        </div>
      </div>  
</div>  
</template>

<script>
import API from './../API' 
import './../assets/style.scss'

export default {
    name: 'Search',
  
  data(){
    return {
      query: '', 
      artist: '', 
      events: '',
      loading: false, 
      fromChild: false,
    }
  },
    methods: {
      getArtistAndEvents() {  

        this.loading = true; 
        this.artist = '';          
        this.events = '';          
        API.artist(this.query)
          .then(artist => {
            this.artist = artist;
            if(artist.upcoming_event_count > 0){
              API.events(this.artist.name)
                .then(events => {
                  this.events = events;
                  console.log(events);
                   
                } )
            }
            console.log(this.artist);
            this.loading = false;
        });              
      }, 
      OnChildClick (value) {    
          this.fromChild = value; 
          console.log(this.fromChild);
          
    }
  }
}
</script>

<style scoped>

#seacrh {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  width: 80%;
  margin: 2em auto 0 auto;
}

input {
  width: 30%;
}

@media screen and (max-width: 600px) {

  input {
     width: 100%; 
  }
}

</style>