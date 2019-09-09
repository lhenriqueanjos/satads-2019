<template>
  <v-container>
    <v-layout text-center justify-center column>
      <v-flex mb-4>
        <v-img
          src="@/assets/cap.jpg"
          aspect-ratio="1"
          class="secondary lighten-1 mx-auto"
          max-width="400"
          max-height="220"
        ></v-img>
      </v-flex>

      <h1 class="headline font-weight-bold mb-4">Referências</h1>

      <v-layout text-center justify-center row>
        <v-icon color="warning">mdi-file-presentation-box</v-icon>&nbsp;
        <a
          href="https://docs.google.com/presentation/d/11nTUWfTSKeYgUj3y8LZiWP_BnvSYv3WUZWeUMMbg2YE/edit?usp=sharing"
        >Slides da Apresentação</a>
      </v-layout>

      <br />

      <a href="https://br.vuejs.org/v2/guide/syntax.html">O Template</a>
      <a href="https://br.vuejs.org/v2/api/#Opcoes-Dados">Component Options</a>
      <a href="https://vue-loader.vuejs.org/guide/scoped-css.html">Scoped CSS</a>
      <a href="https://vue-loader.vuejs.org/guide/css-modules.html">CSS Modules</a>
      <a href="https://router.vuejs.org/">vue-router</a>
      <a href="https://nuxtjs.org/">Nuxt</a>
    </v-layout>
  </v-container>
</template>
