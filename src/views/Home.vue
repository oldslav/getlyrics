<template>
  <v-container grid-list-xl>
    <v-layout row wrap align-center justify-center>
      <v-flex xl3 lg3 xs12>
        <v-text-field
          v-model="payload.band"
          label="Band"
          placeholder="Band"
        ></v-text-field>
      </v-flex>
      <v-flex xl3 lg3 xs12>
        <v-text-field
          v-model="payload.title"
          label="Title"
          placeholder="Title"
        ></v-text-field>
      </v-flex>
      <v-btn color="success" @click="getLyrics">Find lyrics</v-btn>
    </v-layout>
    <v-layout row wrap align-center justify-center>
      <v-flex xl6 lg6 sm12 text-xs-center>
        <v-card v-show="lyrics" elevation="6">
          <v-card-text>
            <h3 v-if="!loading" style="white-space: pre-line">{{ lyrics }}</h3>
            <v-progress-circular
              v-else
              indeterminate
              color="success"
            ></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  components: {},
  data: () => ({
    payload: {
      band: "",
      title: ""
    },
    loading: false
  }),
  methods: {
    ...mapActions({
      getEm: "getLyrics"
    }),
    async getLyrics() {
      this.loading = true;
      await this.getEm(this.payload); // store.dispatch("getLyrics", this.payload);
      this.loading = false;
    }
  },
  computed: {
    ...mapGetters({
      lyrics: "outputLyrics"
    })
  }
};
</script>
