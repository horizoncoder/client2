<template>
    <div class= "container">
        <center><h3>Admin Panel</h3></center>

 <div class="form-price">
    <label for="exampleFormControlInput1">Id(only for change )</label>
    <input v-model="id" type="Name" class="form-control" id="exampleFormControlInput1" placeholder="id" @change="getProductById()">

  </div>

  <div class="form-price">
    <label for="exampleFormControlInput1">Name</label>
    <input v-model="prod.name" type="Name" class="form-control" id="exampleFormControlInput1" placeholder="name" >
  </div>
  <div class="form-price">
    <label for="exampleFormControlInput1">Image</label>
    <input v-model="prod.image"  type="Name" class="form-control" id="exampleFormControlInput1" placeholder="image">
  </div>
   <div class="form-price">
    <label for="exampleFormControlInput1">category</label>
    <input v-model="prod.category"  type="Name" class="form-control" id="exampleFormControlInput1" placeholder="category">
  </div>
    <div class="form-price">
    <label for="exampleFormControlInput1">price</label>
    <input v-model="prod.price"  type="Name" class="form-control" id="exampleFormControlInput1" placeholder="price">
  </div>

  <div class="form-price">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea v-model="prod.description"  class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button v-on:click = "add()" type="button" class="btn btn-primary mb-2">Add</button>
  <button v-on:click = "change(prod._id)" type="button" class="btn btn-primary mb-2">change</button>
  <a href = "#" @click="changeValue(prod._id)">{{prod._id}}</a>
    <input type="text" v-model = "search">
    </div>
</template>

<script>
//import Vue from 'vue'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
import Api from '@/config/Api'
export default {
    
     data: function() {
           return {
                search:"",
                products: [],
                prod: {name:"", price:0, category:"", description:"",image:"",_id:""},
                id:0
           };
        },
        methods:{
          getProductById() {
            Api().get(`/products/`+this.id)
              .then((response) => {
                  console.log(response.data)
                  this.prod = response.data;
              })  

          },
          add: function(){
               Api().post(`/seeder/products`,{
                    name: this.prod.name,
                    price: this.prod.price,
                    category: this.prod.category,
                    description: this.prod.description,
                    image: this.prod.image

               })
              .then((response) => {
                  console.log(response.data)
              })       
},

 change: function(id){
                Api().put(`/seeder/products/`+ id  ,{
               name: this.prod.name,
                    price: this.prod.price,
                    category: this.prod.category,
                    description: this.prod.description,
                    image: this.prod.image,
                    _id: this.prod._id
                })
                .then((response) => {
                    console.log(response.data)
                    this.reload();
                })
 },
   changeValue: function(name){
                this.prod = this.products.find(elem => {
                    if(elem.name == name){
                        return elem
                    }
                });
                this.search = name
}
        }
}
</script>