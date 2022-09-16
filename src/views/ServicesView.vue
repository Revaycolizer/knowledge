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
        <!-- <q-btn flat color="dark" label="Share" /> -->
        <!-- <q-btn @click="dialog=!dialog" flat color="primary" label="Book" /> -->
        <div class="q-pa-md q-gutter-sm">
    <q-btn label="See price" color="primary" flat @click="persistent = true" />

    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-white" style="width: 400px">
        <q-card-section>
          <div class="text-h6" align="center">Price</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Only at a cheap price and affordable
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

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
            Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.<br /> What are 5 characteristics that make a good app?
<br />5 Characteristics of Winning Mobile Apps:<br />
Great UI (User Interface).<br />
Fast Loading Time and High Performance.<br />
Extremely Helpful Customer Support.<br />
Quick Adaptation to Users' Needs.<br />
Compatible with a Mobile Platform.<br />
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>

    <q-card flat>
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
        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="learn = !learn"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="learn">
          <q-separator />
          <q-card-section class="text-subitle2">
            Blogging teachings are well provided by our professional blogger.<br />
            Although people often think of social media as a space for non-academic interactions, blogs can be helpful tools for instructors interested in enhancing their students’ communication skills and increasing their students’ investment in learning.

Blogs can be spaces for informal or formal writing by students, and the capacity of blogs to support multiple forms of media (images, videos, links, and so on) can help students bring creativity to their communication. Most blogs includes tools for commenting and discussion, enabling students to engage their ideas in conversation with others, either within their local learning communities or on the open Web.

Student writing is often seen by just one person on the planet (their instructor), which can make writing assignments feel like “busy work.” The dynamic interaction between writer and audience that blogs facilitate can help students see real value in their academic writing and take that writing more seriously. Moreover, the public, persistent nature of blogs can help students practice more integrative learning, finding connections among their personal, professional, and academic experiences.
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    </div>
  </q-card>

  <q-card flat>
    <h5 style="text-align:center;"> 3.Software Testing</h5>
  
  
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="q-card" flat bordered>
      <q-img
        :src="testing"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Service Phase 3</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Software Testing</div>
        <div class="text-caption text-grey">
         All softwares and apps develop are tested to check for their functionality.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="test = !test"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="test">
          <q-separator />
          <q-card-section class="text-subitle2">
            Software Testing
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    </div>
  </q-card>

  <q-card>
    <h5 style="text-align:center;"> 4.Software Development</h5>
  
  
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="q-card" flat bordered>
      <q-img
        :src="image"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Service Phase 4</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Software Development</div>
        <div class="text-caption text-grey">
          It is done at a cheap price, the price is easily affordable by anyone who is interested in getting a professional software.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="dvp = !dvp"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="dvp">
          <q-separator />
          <q-card-section class="text-subitle2">
            Software Development
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    </div>
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
        learn:ref(false),
        test:ref(false),
        dvp:ref(false),
        persistent: ref(false),
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
  