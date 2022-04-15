<template>
  <div class="container">
    <div class="row align-items-center h-screen w-screen">
      <div class="w-full h-full flex flex-col justify-center items-center">
          <div class="w-full flex flex-col items-center">            
            <div class="text-xl font-bold">National Foundation for India</div>
            <div class="text-3xl font-bold">ToDo List</div>
          </div>
        <form @submit="loginWithEmailAndPassword">        
      
          <div
            class="mb-3 border bg-warning border-warning rounded p-2"
            style="--bs-bg-opacity: 0.2"
            v-if="!!this.message"
          >
            {{ this.message }}
          </div>
          <div class="m-5">
            <input
              class="form-control mr-3 pr-3"
              type="email"
              name="email"
              id="email"
              v-model="this.email"
              placeholder="Enter username"
              required
            />
          </div>
          <div class="m-5">
            <div class="input-group mb-3">
              <input
                :type="this.isPasswordVisible ? 'text' : 'password'"
                class="form-control"
                name="password"
                placeholder="Password"
                v-model="this.password"
                required
              />
              <div class="input-group-text">
                <input
                  class="form-check-input mt-0 me-2"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  v-model="this.isPasswordVisible"
                />Show
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-primary">Sign In</button>
            <span class="ms-3 text-end"
              >Not registered yet?
              <router-link to="/sign-up">Sign Up</router-link></span
            >
          </div>
        </form>
        <div class="text-center my-3">
          <h4 class="mb-3">or</h4>
          <button
            class="btn btn-lg btn-outline-primary"
            @click="this.$store.dispatch('signInWithGoogle')"
          >
            <div class="d-flex justify-content-center align-items-center gap-2">
              <span class="align-self-baseline"> Sign In with Google </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInView",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      isPasswordVisible: false,
    };
  },
  methods: {
    async loginWithEmailAndPassword(event) {
      event.preventDefault();

      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("signInWithEmailAndPassword", formData);
      } catch (error) {
        this.message = error.message;
      }
    },
  },
};
</script>
