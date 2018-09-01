import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import App from "./App.vue";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "login"
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login
      },
      props: { accountData: App.userIdentity }
    },
    {
      path: "/register",
      name: "register",
      components: {
        default: Register
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        default: Profile
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
