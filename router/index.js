import VueRouter from 'vue-router';
import Products from '@/components/Products'
import Product from '@/components/Product'
import Category from '@/components/Category'
import Checkout from '@/components/Checkout'
import Thakyou from '@/components/Thakyou'
import Admin from '@/components/Admin'
import Login from '@/components/Login.vue'
import Secure from '@/components/Secure.vue'
import store from '../store/index'
import Vue from 'vue'
import Vuex from "vuex"


Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name:'home',
        component: Products
    },
    {
        path: '/product/:id',
        name: 'product',
        component: Product,
        props: true
    },
    {
        path: '/category/:category',
        name: 'category',
        component: Category,
        props: true
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
    },
    {
        path: '/thankyou',
        name: 'thankyou',
        component: Thakyou,
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
    },
    {
        path: '/admin',
        redirect: {
            name: "login"
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/secure",
        name: "secure",
        component: Secure,
        beforeEnter: (to, from, next) => {
            if(store.getters.getAuthentication == false) {
                next(false);
            } else {
                next();
            }
        }
    },

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
