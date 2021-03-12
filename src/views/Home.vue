<template>
  <div class="home">
    <div align="center">
        <b-card
          :title="name"
          :img-src="photoUrl"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem"
        >
          <b-card-text>
            {{ email }}
          </b-card-text>

          <b-button href="#" variant="danger" @click="logout">Logout</b-button>
        </b-card>
    </div>
  </div>
</template>

<script>
import { auth } from "@/main.js";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      Lastname: "",
      email: "",
      photoUrl: "",
    };
  },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        this.name = user.displayName;
        this.Lastname = user.displayLastname;
        this.email = user.email;
        this.photoUrl = user.photoURL;
      } else {
        this.$router.replace("/about");
      }
    });
  },
  methods: {
    logout() {
      auth
        .signOut()
        .then(() => {
          console.log("signOut Complete");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
