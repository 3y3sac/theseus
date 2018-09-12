<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <img src="../public/img/icons/common/avatar.png" class="rounded-circle">
                        </div>
                        <div class="text-center mt-5">
                            <h3>John Smith, 27</h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Sydney, Australia</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Junior Developer - Readify</div>
                            <div>University of Sydney</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                     <base-button size="lg" type="primary">Manage Accounts</base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
            <div class="col-md-4">
                <base-button block type="primary" class=" mb-3" @click="popUp(true)">
                Authentication Request
                </base-button>

                <modal :show.sync="this.$store.state.notify"
                        gradient="primary"
                        modal-classes="modal-primary modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Please pay attention to this</h6>

                <div class="py-3 text-center">
                    <i class="ni ni-bell-55 ni-3x"></i>
                    <h4 class="heading mt-4">Authentication Request</h4>
                    <p>Do you want to login to website "127.0.0.1:3000"?</p>
                </div>

                    <template slot="footer">
                        <base-button type="link"
                             text-color="white"
                             class="ml-auto"
                             @click="authenticator(true)">
                             Yes
                        </base-button>
                        <base-button type="white" @click="authenticator(false)">Nope</base-button>
                    </template>
                </modal>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      notify: false
    };
  },
  methods: {
    popUp(status) {
      this.$store.commit("AuthPopUp", status);
    },
    authenticate(status) {
      this.$store.commit("isAuthenticated", status);
    },
    authenticator(status) {
      this.popUp(false);
      if (status) {
        alert("Authentication Request Successful!");
        this.authenticate(true);
      } else {
        alert("Authentication Request Denied!");
      }
    }
  }
};
</script>
<style>
</style>
