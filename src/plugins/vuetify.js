import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#002868',
        secondary: '#1B53AD',
        accent: '#04F7F7',
        error: '#E34C4C',
        info: '#5088E1',
        success: '#56BD5B',
        warning: '#F7B422',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
