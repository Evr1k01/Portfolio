<template>
  <!-- header -->
  <home-bar></home-bar>

  <!-- main -->
  <v-container
    class="fill-height d-flex"
    fluid
  >
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8" lg="5">
        <v-row justify="center">
          <v-img
            :src="avatar"
            class="home__logo"
          >
          </v-img>
        </v-row>
        <v-card class="home__card home__card-body">
          <v-card-title class="text-center">
            I am glad to welcome <span class="home__card-title-span">you</span>!
            <v-row justify="center" class="mb-1 mt-1">
              <a href="mailto:maximu17@mail.ru" class="home__card-title-icon"><v-icon class="mr-1">mdi-email-fast-outline</v-icon></a>
              <a href="tel:+4915259466316" class="home__card-title-icon"><v-icon class="ml-1" href="tel:+4915259466316">mdi-cellphone</v-icon></a>
            </v-row>
          </v-card-title>
          <v-card-text>
            <span class="home__card-title-about mb-3">Some information about me:</span>
            <p class="home__card-title-text mt-1 mb-2">
              My name is Maxim Kravtsov. I am currently studying at the Schmalkalden University of Applied Sciences. Want to know more about me?
              <v-icon>mdi-arrow-down</v-icon>
            </p>
            <router-link to="/about" class="home__card-title-link">More Info</router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts">
  import HomeBar from '../components/AppBar.vue';
  import avatar from '../assets/photos/cat.jpg';
  export default {
    name: 'HomeView',
    components: {
      HomeBar,
    },

    data:() => ({
      avatar,
    }),

    setup(){

    }
  }
</script>
