<template>
  <v-container>
    <v-layout text-center justify-center column>
      <v-flex mb-4>
        <v-img
          src="@/assets/luiz.jpeg"
          aspect-ratio="1"
          class="grey lighten-1 mx-auto"
          max-width="220"
          max-height="220"
          style="border-radius: 50%"
        ></v-img>
      </v-flex>

      <v-expansion-panels>
        <v-expansion-panel class="mb-4" style="max-width: 500px">
          <v-expansion-panel-header>
            <h1 class="headline font-weight-bold mb-4">Luiz Henrique dos Anjos</h1>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <p class="subheading font-weight-regular text-start">
              Tech Lead de Front-end na Contabilizei.
              Formado em Análise e Desenvolvimento de Sistemas na UFPR.
              Nascido na Bahia, morando em Curitiba há quase 6 anos,
              tenho mais de 8 anos de experiência como desenvolvedor,
              sempre buscando compartilhar meus aprendizados.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-layout text-center justify-center row>
        <v-icon color="secondary">mdi-linkedin-box</v-icon>&nbsp;
        <a href="https://www.linkedin.com/in/lhenriqueanjos/">/lhenriqueanjos</a>
      </v-layout>

      <v-layout text-center justify-center row>
        <v-icon color="secondary">mdi-telegram</v-icon>&nbsp;
        <a href="https://t.me/LuizHenrique/">@LuizHenrique</a>
      </v-layout>

      <v-layout text-center justify-center row>
        <v-icon color="secondary">mdi-medium</v-icon>&nbsp;
        <a href="https://medium.com/@LuizHenrique91">/@LuizHenrique91</a>
      </v-layout>
    </v-layout>
  </v-container>
</template>
