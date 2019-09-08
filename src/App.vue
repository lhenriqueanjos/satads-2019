<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="headline">
        <span>
          Web, SPA, Vue.js - SATADS 19
        </span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
