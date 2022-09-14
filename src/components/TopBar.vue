<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 1900px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="home" label="Home"  style="height:fit-content"/>
          <q-space></q-space>
          <q-tab name="services" label="Services" left />
          <q-tab name="about" label="About" left/>
          <q-tab name="contact us" label="Contact us" left/>
        </q-tabs>
        
        <q-separator />

        <q-tab-panels v-model="tab"  animated>
          <q-tab-panel name="home">
            
            <div class="text-h6">Home</div>
            
            <HomeOut/>
          
          </q-tab-panel>
        

          <q-tab-panel name="services">
            <div class="text-h6">Services</div>
            <ServicesView/>
            <router-link to="/services"></router-link>
          </q-tab-panel>

          <q-tab-panel name="about">
            <div class="text-h6">About</div>
            <AboutView/>
            <router-link to="/about"></router-link>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
<!-- 
      <q-card>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Home</div>
          <router-link to="/home"></router-link>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            <router-link to="/about"></router-link>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>

        <q-separator />

        
      </q-card> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import AboutView from '@/views/AboutView.vue';
import ServicesView from '@/views/ServicesView.vue';
import HomeOut from '../views/HomeOut.vue';




export default {
    setup() {
        return {
            tab: ref("mails")
        };
    },
    components: { AboutView, ServicesView, HomeOut,  }
}
</script>
