<template>

<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #7289DA;mb-3">
    <div class="container">
        <br>
        <router-link tag="a" :to = "{name: 'home'}" class="navbar-brand"><img :src="image" width="100px"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav  ml-auto">
                
                <router-link tag="a" :to = "{name: 'checkout'}" class="nav-link navbar-brand">Cart<span class="badge badge-light">{{ cart.length }}</span></router-link>
                <router-link tag="a" :to = "{name: 'admin'}" class="navbar-brand text-danger "> <strong>Admin</strong> </router-link>
                <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <strong>Category</strong>  
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
         
          <li class="nav-item active" v-for="category in categories" :key="category._id">
                    <router-link tag="a" :to = "{name: 'category', params: {category: category.title}}" class="nav-link">{{ category.title }}</router-link>
                </li>
                <img src="'../../images/image.png" alt="">
                <p></p>
        </div>
      </li>
            </ul>
        </div>
        
    </div>
</nav>


</template>

<script>
import Api from '@/config/Api'
import image from '@/components/images/logo.png';
export default {
    data() {
        return {
            categories: [],
            image
        }
    },
    created() {
        Api().get('/categories')
            .then(response => {
                this.categories = response.data;
            });
            
    }, 
    computed: {
        cart() {
            return this.$store.getters.getCart
        }
    }
}
</script>

<style>

</style>
