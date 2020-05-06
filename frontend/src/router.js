import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    mode: "history",
    routes:[
        {
          path: "/" ,
          components: require("./containers/Articles.vue")
        },
        {
        path: "/article/:id",
        components: require("./containers/Article.vue")
        }

    ]
});
export default router;
