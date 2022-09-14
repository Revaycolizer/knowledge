<template>
  <div class="services">
    <h1>Services</h1>
  </div>
  <p class="text-h4">The Services provided are as highlighted at the home page.</p>
  <q-card class="my-card">
     

     <img :src="mobile">

     
     <q-card-section>
      

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          Mobile Apps Development
        </div>
        
      </div>

      
    </q-card-section>

    <q-card-section class="q-pt-none">
     
      <div class="text-h6 text-black  ">
        All mobile apps are developed professionally under our team.
      </div>
    </q-card-section>
   </q-card>

</template>
<script>
  import image from '../assets/dvp.jpg'
  import learning from '../assets/learning.jpg'
  import testing from '../assets/testing.jpg'
  import mobile from '../assets/mobile.jpg'
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        stars: ref(4),
        image:image,
        mobile:mobile,
        learning:learning,
        testing:testing
      }
    }
  }
  </script>
<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 1500px
  </style>
  