<template>
  <div class="container">
<section class=" bg-light text-dark">

  <div class="row ">
    <div class="col-md-6 mb-4 mb-md-0">

      <div id="mdb-lightbox-ui"></div>

      <div class="mdb-lightbox">

        <div class="row product-gallery mx-1">

          <div class="col-12 mb-0">
            <br>
            <figure class="view overlay rounded z-depth-1 main-img">
               <img :src="product.image" :alt="product.name" class="img-fluid">
            </figure>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="col-md-6">
<br>
      <h5>{{ product.name }}</h5>
      <p class="mb-2 text-muted text-uppercase small">id:{{product._id }}</p>
     <p class="text-danger font-weight-bold"><strong>${{product.price}}</strong></p>
      <p class="pt-1"> {{ product.description }}</p>
      <div class="table-responsive">
        <table class="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Category</strong></th>
              <td>{{ product.category }}</td>
            </tr>

          </tbody>
        </table>
      </div>
 <button class="btn btn-outline-primary mb-5" @click="addToCart(product)">Buy Now</button>
    </div>
  </div>

</section>
<!--Section: Block Content-->
  </div>
</template>

<script>
import Api from '@/config/Api'
import mixins from '@/mixins/mixins'

export default {
  props: ['id'],
  mixins: [mixins],
  data(){
    return {
      product: {}
    }
  },
  created() {
       Api().get(`/products/${this.id}`)
              .then(response => {
                this.product = response.data
              });
  },
  methods: {
        checkout(e) {
            e.preventDefault();
            this.$router.push({ name: 'checkout' });
            console.log(e);
        }
    }
}
</script>

<style>

</style>
