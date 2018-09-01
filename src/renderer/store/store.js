import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userIdentity: {
      firstName: "John",
      lastName: "Doe",
      password:
        "7d59d92e7eb8bbad760e030df43e14924b3f01d608a563aa96fe485f2202d9dfd9a2e6b0f6625473f8976ff1d39e59e760472841a4619ef8b07bd5b4832d89a6",
      DOB: new Date("1995-12-17T03:24:00"),
      ethnicity: "Caucasian",
      gender: "Apache Attack Helicopter",
      nationality: "Australian",
      occupation: "Graphic Designer"
    }
  },
  getters: {}
});
