<template>
    <div class="border">
  <div class="wrap">
    <div class="product-wrap">
        <router-link tag="a" :to="{name: 'product', params: {id: product._id}}">
            <img class="card-img-top" :src="product.image" :alt="product.name">
        </router-link>
        
    </div>
    <div class="loop-action">
      <router-link tag="a" class="add-to-cart"  :to="{ name: 'product', params: { id: product._id }}">Desciption</router-link>
      <a  class="loop-add-to-cart" @click="addToCart(product)">Buy Now</a>
    </div>
  </div>
    <div class="product-info">
      <h3 class="product-title">{{ product.name }}</h3>
      <a href = "#" v-on:click.prevent = "remove(product._id)" >Удалить</a>
        id:{{product._id }}
       <p><span class="font-weight-bold">Price $</span>: {{ product.price }}</p>
          <p><span class="font-weight-bold">Category</span>: {{ product.category }}</p>
        <p class="card-text">{{ product.description.substring(0, 50) }}</p>
   </div>
</div>

</template>

<script>
import mixins from '@/mixins/mixins';
import Api from '@/config/Api';
export default {
    props: ['product'],
    mixins: [mixins],
      methods:{
remove: function(id){
               Api().delete(`/seeder/products/`+ id  )
                .then((response) => {
                    console.log(response.data)
                    this.reload();
                })

      },
    
}
}
</script>

<style scoped>
.card-title {
        cursor: pointer;
    }
    * {box-sizing: border-box;}
.border {
  width: 300px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border: 1px solid #F1E7E8;
}
.wrap {
  height: 100%;
  position: relative;
 }
.product-wrap {position: relative;}
.product-wrap:after {
  content: '';
  background: rgba(73, 102, 162, .5);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0;
  transform: scale(.3);
  transition: .3s ease-in-out;
}
.border:hover .product-wrap:after {
  opacity: 1;
  transform: scale(1);
}
.product-wrap a {
  display: block;
  text-decoration: none;
}
.product-wrap img {
  display: block;
  width: 100%;
}
.loop-action {
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: .3s ease-in-out;
}
.border:hover .loop-action {opacity: 1;}
.loop-action a {
  text-decoration: none;
  display: block;
  border: 1px solid white;
  white-space: nowrap;
  text-transform: uppercase;
  padding: .5em 1em;
  font-size: 14px;
  line-height: 1.6;
  outline: none;
  position: relative;
  overflow: hidden;
  text-align: center;
  color: white;
  min-width: 160px;
  margin: 5px auto;
  transition: .3s ease-in-out;
}
.loop-action a:after {
  content: '';
  position: absolute;
  left: -220%;
  top: -500%;
  width: 140%;
  height: 1000%;
  transform: rotate(45deg);
  background: white;
  z-index: -1;
  transition: .3s ease-in-out;
}
.loop-action a:hover {color: black;}
.loop-action a:hover:after {left: 0%;}
.border:hover {border-color: #4966A2;}
.product-info {padding-top: 15px;}
.stars {
  font-size: 14px;
  font-family: FontAwesome;
}
.stars:before {
  content: "\f005\f005\f005\f005\f123";
  color: #F2453E;
}
.product-title {
  font-weight: normal;
  font-family: "Open Sans";
  color: #162546;
  font-size: 18px;
}
.price {
  font-family: "Open Sans";
  color: #162546;
  font-style: italic;
  font-weight: bold;
}
</style>
