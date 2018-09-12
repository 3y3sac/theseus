import Vue from "vue";
import App from "./App.vue";
import io from "socket.io-client";
import router from "./router";
import { store } from "./store/store";
import Argon from "./plugins/argon-kit";

Vue.config.productionTip = false;
Vue.use(Argon);

new Vue({
  computed: {
    authStatus() {
      return this.$store.state.authenticated;
    }
  },
  methods: {
    popUp(status) {
      this.$store.commit("AuthPopUp", status);
    }
  },
  mounted() {
    //set up listener for web server
    const socket = io("localhost:3000");
    const self = this;
    socket.on("auth", function(data) {
      if (data === "pls") {
        self.popUp(true);
      }
      if (this.authStatus) {
        console.log("successful authentication");
      } else {
        socket.emit("authenticate", true);
        console.log("all good");
      }
    });
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
