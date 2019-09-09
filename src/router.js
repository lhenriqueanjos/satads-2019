import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/referencias',
      name: 'referencias',
      component: () => (
        import(/* webpackChunkName: "referencias" */ './views/Referencias.vue')
      ),
    },
    {
      path: '/recomendacoes',
      name: 'recomendacoes',
      component: () => import(/* webpackChunkName: "recomendacoes" */ './views/Recomendacoes.vue'),
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import(/* webpackChunkName: "sobre" */ './views/Sobre.vue'),
    },
  ],
});
