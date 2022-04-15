<template>
  <img class="rounded-pill vw-10 vh-10" v-if="!!this.getPhoto" :src="this.getPhoto" />
  <div v-if="!!this.getDisplayName">
    <h5>{{ this.getDisplayName }}</h5>
  </div>
  <div>
    <h6>{{ this.getEmail }}</h6>
  </div>
  <button class="btn btn-danger btn-sm" @click="this.signOut">Log Out</button>
</template>

<script>
export default {
  computed: {
    getPhoto() {
      return this.$store.state.auth.user.photoURL;
    },
    getDisplayName() {
      return this.$store.state.auth.user.displayName;
    },
    getEmail() {
      return this.$store.state.auth.user.email;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
    },
  },
};
</script>

<style></style>
