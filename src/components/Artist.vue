<template>

    <div id="artist">
        <div class="card">
        <div class="ds-top"></div>
        <div class="avatar-holder">
          <img :src="artist.thumb_url" :alt="artist.name">
        </div>
        <div class="name">
          <a :href="artist.facebook_page_url" target="_blank">{{artist.name}}</a>
        </div>
        <div class="button">
          <p v-if="artist.facebook_page_url">
            <a :href="artist.facebook_page_url">{{artist.facebook_page_url.slice(11)}}</a>
          </p>
          <p v-else>
            <a>N/A</a>
          </p>
        </div>
        <div class="ds-info">
          <div class="ds posts">
            <h6 title="Number of events">Upcoming Events<i class="fas fa-comments"></i></h6>
            <p>{{artist.upcoming_event_count}}</p>
          </div>  
          <div  v-if="artist.upcoming_event_count < 1" class="view">
            <button>No Events :(</button>
          </div>
        </div>
        </div>
    </div>

</template>


<script>
export default {

  props: ['artist'],
  data() {
    return {
      press: false, 
    }
  }
}
</script>


<style scoped>


</style>