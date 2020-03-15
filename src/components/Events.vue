<template>

<div id="events">
    <br>
    <div class="row">
     <div v-for="(item, index) in events" :key="index" class="column">
        <div class="card">
            <h4>Event Details</h4> 
            <hr>
            <table>
            <tr><th>Country</th><th>City</th></tr>
            <tr><td>{{ item.venue.country }}</td><td>{{ item.venue.city }}</td></tr>
            <tr><th>Venue</th><th>Date</th></tr>
            <tr><td>{{ item.venue.name.split(' ').slice(0,2).join(' ') }}</td><td>{{ item.datetime.slice(0,10) }}</td></tr>
            </table>
        </div>
        <br><br>
     </div>
    </div>
</div>
    
</template>


<script>
export default {

    props: ['events'], 

    data(){
    return {
      e: '',
    }
  }
    
    
}
</script>


<style scoped>

/* Float four columns side by side */
.column {
  float: left;
  width: 30%;
  padding: 0 10px;
  margin-left: 0px;
  margin-right: 20px;
}

h4 {
  font-size: 20px;
  contain: size;
}

.row {
  margin-left: 100px;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/*Counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  height: auto;
  width: auto;
}

table {
  width: 100%; 
}

th, td {
  padding: 8px;
  text-align: centre;
  font-size: 14px;
  text-align: center;
  border-bottom: 0ch;
}

</style>