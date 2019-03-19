<template>
  <v-container grid-list-xl>
    <v-layout row wrap align-center justify-center>
      <v-flex xl3 xs12>
        <v-text-field v-model="payload.band" label="Band" placeholder="Band"></v-text-field>
      </v-flex>
      <v-flex xl3 xs12>
        <v-text-field v-model="payload.title" label="Title" placeholder="Title"></v-text-field>
      </v-flex>
      <v-btn color="success" @click="getLyrics">Find lyrics</v-btn>
    </v-layout>
    <v-layout row wrap align-center justify-center>
      <v-flex xl6 sm12>
        <v-card v-show="lyrics">
          <v-card-text>
            <p style="white-space: pre-line">{{ lyrics }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from "@/store/store";

export default {
  name: "home",
  components: {},
  data: () => ({
    payload: {
      band: "",
      title: ""
    }
  }),
  methods: {
    getLyrics() {
      store.dispatch("getLyrics", this.payload);
    }
  },
  computed: {
    lyrics: () => {
      return store.state.lyrics;
    }
  }
};
</script>
