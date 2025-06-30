import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Importações do Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Criação da instância do Vuetify
const vuetify = createVuetify({
    components,
    directives,
})

// Inicialização do app Vue com Vuetify
createApp(App)
  .use(vuetify)
  .mount('#app')
