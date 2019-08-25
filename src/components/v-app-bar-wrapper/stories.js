import { storiesOf } from '@storybook/vue'

import CustomComponent from './index.vue'

storiesOf('v-app-bar wrapped', module)
  .add('Basic usage', () => ({
    components: { CustomComponent },


    template:
      '<custom-component appName="@nuxt/vuetify demo" > Hello, world </custom-component>'
  }))
