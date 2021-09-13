<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 pt-5 pb-0 class='headline font-weight-light'>
        Hello!<hr class='my-4'>Your name is <editable-span :text='user.name' hint='edit your name' @update='updateName'></editable-span>&nbsp;<editable-span :text.sync='user.surname' hint='edit your surname' @update='updateSurname'></editable-span> and you work at <editable-span :text='user.company' hint='edit your company' @update='updateCompany'></editable-span>.
      </v-flex>
      <v-flex xs12>
        Your email is {{user.email}}.
        <!-- You are {{user.verfied}} verfied. -->
        <hr class='my-4'>
      </v-flex>
      <v-flex xs12 my>
        <v-layout row wrap align-top>
          <v-flex xs12>
            <v-btn small class='ma-0' @click.native='toggleShowToken'>{{showToken ? "Hide" : "Show"}} API Token / Connection String</v-btn depressed><br>
          </v-flex>
          <v-flex xs12 v-if='showToken'>           
            <v-alert :value="true" type="warning">
              Take care, this token is unique to you. Do not share it with others as it grants full access on your behalf to the api.
            </v-alert>
            <code class='pa-3' style="user-select:all; max-width:100%; overflow-wrap: break-word;">{{user.apitoken}}</code>          
          </v-flex>  
          <v-flex>                  
            <v-layout row wrap align-top>
              <v-flex xs12>
                <v-btn small class='ma-0' @click.native='refreshToken'>Refresh API Token</v-btn depressed><br>
              </v-flex>
            </v-layout> 
            <v-alert :value="isTokenExpired" type="error">
              Your API Token has expired. Please generate a refreshed token to regain access to the API.
            </v-alert>     
            <v-alert :value="showTokenRefreshSuccess" type="success">
              API Token successfully refreshed.
            </v-alert>             
          </v-flex>                   
        </v-layout>
      </v-flex>     
    </v-layout>
  </v-container>
</template>
<script>
import jwt from "jsonwebtoken";

export default {
  name: "ProfileView",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted: function () {
    this.checkTokenExpiry();
  },
  data() {
    return {
      showToken: false,
      isTokenExpired: false,
      showTokenRefreshSuccess: false
    };
  },
  methods: {
    updateName(args) {
      this.$store.dispatch("updateLoggedInUser", {
        _id: this.user._id,
        name: args.text,
      });
    },
    updateSurname(args) {
      this.$store.dispatch("updateLoggedInUser", {
        _id: this.user._id,
        surname: args.text,
      });
    },
    updateCompany(args) {
      this.$store.dispatch("updateLoggedInUser", {
        _id: this.user._id,
        company: args.text,
      });
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    toggleShowToken() {
      this.showToken = !this.showToken;
      this.showTokenRefreshSuccess = false;
      this.checkTokenExpiry();
    },    
    refreshToken() {
      this.$store.dispatch("refreshToken", { _id: this.user._id });
      this.showTokenRefreshSuccess = true;
      this.isTokenExpired = false;
    },
    checkTokenExpiry() {
      let token = this.$store.state.user.apitoken;
      token = token.replace("JWT ", "");
      const expiry = jwt.decode(token, { complete: true }).payload.exp;
      const now = new Date();
      this.isTokenExpired = now.getTime() >= expiry * 1000;
    },
  },
};
</script>
<style scoped lang='scss'>
</style>
