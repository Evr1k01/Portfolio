<template>
  <v-app-bar>
    <v-row>
      <v-col cols="12">
        <v-row align="baseline" class="home__row">
          <v-col cols="10" sm="11" class="text-start" align-self="center">
            <router-link to="/"><v-img :src="cat" class="home__logo-header"></v-img></router-link>
          </v-col>
          <v-col cols="2" sm="1" class="text-end" align-self="center"><v-icon @click="toggleTheme">mdi-theme-light-dark</v-icon></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import {useTheme} from "vuetify";
import cat from '../assets/photos/cat.jpg';
export default {
  name: "HomeBar",
  data:() => ({
    cat
  }),

  setup(){
    const theme = useTheme()
    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  }
}
</script>

<style scoped>

</style>