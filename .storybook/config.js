import { configure, addDecorator } from '@storybook/vue'

import Vuetify from '../src/plugins/vuetify'

addDecorator(() => ({
  vuetify: Vuetify,
  template: '<v-app><v-content><story/></v-content></v-app>'
}))


// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
