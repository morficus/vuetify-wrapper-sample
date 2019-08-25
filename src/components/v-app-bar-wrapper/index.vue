<template>
  <v-app-bar v-model="showFullBar" app elevate-on-scroll hide-on-scroll data-testid="ncp-bar">
    <v-toolbar-title>{{ appName }}</v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account-circle-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>

    <template v-slot:extension>
      <div class="extension">
        <slot></slot>
      </div>
    </template>
    </v-app-bar>
</template>

<script>

export default {
  name: 'WrappedAppBar',

  props: {
    appName: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      showFullBar: true
    }
  }
}
</script>

<style scoped>
.extension {
  display: block;
  width: 100%;
  padding: 3px;
  background: palevioletred;
}

</style>
