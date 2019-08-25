// We are using "Full Installation" mode because the vuetify-loader plugin doesn't work with Storybook
// and it becomes extraneous and repetitive having to import each component individually when used, not to mention that
// in doing so they would be included in the build output.
// ref: https://vuetifyjs.com/en/getting-started/quick-start#full-installation
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify()
