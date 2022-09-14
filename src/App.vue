<template>
  <q-toolbar class="bg-secondary text-white q-my-md shadow-2">
    <q-btn flat class="text-white" >
<router-link to="/" right>Home             
    </router-link>
  </q-btn>

<q-space/>

 
  <q-space />
  <q-btn flat left >
<router-link to="/services" left>Services   </router-link>
</q-btn>
<q-separator inset spaced />
<q-btn flat>
<router-link to="/about" left>About  </router-link>
</q-btn>
<q-separator inset spaced />
<q-btn flat text-color="white" >
<router-link to="/contact" left>Contact Us</router-link>
</q-btn>


</q-toolbar>



<router-view></router-view>
</template>

<script>
import { ref } from 'vue'





export default {
  name: 'LayoutDefault',

  components: {   },

  setup () {
    return {
      tab: ref('')
    }
  }
}
</script>
<style >
  #app{
    font-family: Avenir,Arial, Helvetica, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    text-align: center;
  }
#nav{
  padding: 30px;
}
#nav a{
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active{
  color: aqua;
  background: crimson;
}
</style>
