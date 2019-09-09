<template>
  <v-container>
    <v-layout text-center justify-center column>
      <v-flex mb-4>
        <a href="https://www.facebook.com/events/344717593072628/permalink/354941985383522/">
          <v-img
            src="@/assets/satads.jpg"
            aspect-ratio="1"
            class="secondary lighten-1 mx-auto"
            max-width="440"
            max-height="160"
          ></v-img>
        </a>
      </v-flex>

      <h1 class="headline font-weight-bold mb-3">Web, Single-Page Applications e Vue.js</h1>

      <p class="subheading font-weight-regular">Material de apoio à palestra</p>

      <br />

      <router-link to="/referencias">Referências</router-link>
      <router-link to="/recomendacoes">Recomendações</router-link>
      <router-link to="/sobre">Sobre Luiz Henrique dos Anjos</router-link>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>
