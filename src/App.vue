<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text icon color="white" v-if="$router.currentRoute.name !== 'home'" @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title class="headline">
        <span>Web, SPA, Vue.js - SATADS 19</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer fixed>
      <v-layout text-center justify-center row>
        <v-icon>mdi-github-circle</v-icon>
        <a href="https://github.com/lhenriqueanjos/satads-2019">Código fonte aqui</a>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>
