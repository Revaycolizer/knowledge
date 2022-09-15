<template>
  <div class="about">
    <h1>Technology Genius 14</h1>
    <h4> Bringing Future Closer</h4>
  </div>

<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img :src="learning">
     
      <q-card-section>
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis">
           Online Learning
         </div>
         
       </div>

       
     </q-card-section>

     <q-card-section class="q-pt-none">
      
       <div class="text-caption text-black  ">
         All blogging teachings are provided by our professional.
       </div>
     </q-card-section>
     

       
     
    </q-card>

    <q-card class="my-card">
      <img :src="testing">
      <q-card-section>
       

       <div class="row no-wrap items-center">
         <div class="col text-h6 ellipsis">
           Software Testing
         </div>
         
       </div>

     </q-card-section>

     <q-card-section class="q-pt-none">
      
       <div class="text-caption text-black  ">
         All softwares are tested professionally under our team.
       </div>
     </q-card-section>


      <q-card-actions align="right">
       
      </q-card-actions>
    </q-card>

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
      
       <div class="text-caption text-black  ">
         All mobile apps are developed professionally under our team.
       </div>
     </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-img :src="image"/>

      <q-card-section>
       

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Software Development
          </div>
          
        </div>

        
      </q-card-section>

      <q-card-section class="q-pt-none">
       
        <div class="text-caption text-black  ">
          All softwares are developed professionally under our team.
        </div>
      </q-card-section>

      <q-separator />

      
    </q-card>
  </div>
</template>

<script>
import image from '../assets/dvlp.jpg'
import learning from '../assets/online learning.jpg'
import testing from '../assets/software testing.jpg'
import mobile from '../assets/mobile apps.jpg'
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
  max-width: 300px
</style>
