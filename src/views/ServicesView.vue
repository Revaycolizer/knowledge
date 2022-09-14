<template>
  <div class="services">
    <h1>Services</h1>
  </div>
  <p class="text-h4">The Services provided are as highlighted at the home page.</p>
  <p class="text-h5">1. Mobile apps Development</p>
  <q-space/>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        :src="mobile"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Service Phase 1</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Mobile apps Development</div>
        <div class="text-caption text-grey">
          It is done at a cheap price, the price is easily affordable by anyone who is interested in getting a professional mobile app.
        </div>
      </q-card-section>

      <q-card-actions>
        <!-- <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" /> -->

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            Mobile app development
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>

    <q-card>
    <h5 style="text-align:center;"> 2.Online Learning</h5>
  
  
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="q-card" flat bordered>
      <q-img
        :src="learning"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Service Phase 2</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Online Learning</div>
        <div class="text-caption text-grey">
        Online Learning is done at a cheap price nearly a freely price, the price is easily affordable by anyone who is interested in bloggings.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            Online Learning
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    </div>
  </q-card>

  </div>

  

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
        expanded: ref(false),
        image:image,
        mobile:mobile,
        learning:learning,
        testing:testing,
      }
    }
  }
  </script>
<style lang="sass" scoped>
  
  .my-card
    width: 100%
    max-width: 1400px
  .q-card
    width: 100%
    max-width: 1400px
  </style>
  