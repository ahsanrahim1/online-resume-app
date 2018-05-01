/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      students: [
        {
          first_name: "Peter",
          last_name: "Jang",
          email: "peter@email.com",
          phone_number: "12121212121",
          bio: "  ",
          linkedin_url: "something url",
          twitter_utl: "url",
          personal_url: " url",
          resume_url: "url",
          github_url: "url",
          photo: "",
          experience: {},
          education: {},
          skills: {}
        },
        {
          first_name: "Peter2",
          last_name: "Jang",
          email: "peter@email.com",
          phone_number: "12121212121",
          bio: "  ",
          linkedin_url: "something url",
          twitter_utl: "url",
          personal_url: " url",
          resume_url: "url",
          github_url: "url",
          photo: ""
        },
        {
          first_name: "Peter3",
          last_name: "Jang",
          email: "peter@email.com",
          phone_number: "12121212121",
          bio: "  ",
          linkedin_url: "something url",
          twitter_utl: "url",
          personal_url: " url",
          resume_url: "url",
          github_url: "url",
          photo: ""
        }
      ]
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
