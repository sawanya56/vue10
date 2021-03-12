<template>
  <div class="container">
    <b-card class="mt-3 mb-3 col-4 offset-md-4" style="height: 25rem">
      <b-iconstack font-scale="2">
        <b-icon
          align="center"
          icon="person-circle"
          aria-hidden="true"
          variant="dark"
        ></b-icon>
      </b-iconstack>

      <br />
      <h3 class="py-5 mb-2" >Login</h3>
      <b-row cols="5" class="text-center">
        <b-col class="py-5 mb-2"></b-col>
      </b-row>
      <br />
      <b-btn variant="success" class="mr-2" @click="login">Login</b-btn>
      <b-btn variant="danger" class="mr-2" @click="login">Logout</b-btn>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { auth } from "@/main.js";

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          const token = credential.accessToken;
          console.log(token);
          const user = result.user;
          console.log(user);
          this.$router.replace("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
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
