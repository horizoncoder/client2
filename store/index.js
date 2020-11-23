import Vue from 'vue'
import VueRouter from "vue-router"
import Vuex from "vuex"


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        charge: {},
        user: null
    },
    mutations:{
        setCart: (state, payload) => {
            state.cart.push(payload);
        },
        setQuantity:(state, payload) => {
            let item = state.cart.find(product => {
                return product.id === payload.id
            });
            item.qty = payload.qty;
        },
        setPrice: (state, payload) => {
            let item = state.cart.find(product => {
                return product.id === payload.id
            });
            item.subtotal = payload.subtotal;
        },
        setCharge: (state, payload) => {
            state.charge = payload;
        },
        setAuthentication(state, status) {
            state.authenticated = status;
        }
    },
    getters: {
        getCart: state => state.cart,
        getCharge: state => state.charge,
      
    }
});

