<template>
  <div id="nav-bar">
    <router-link to="/products" id="products-link">
      <h1>FABULOUS FOOTWEAR</h1>
    </router-link>
    <router-link to="/cart" id="cart-link">
      <button class="button">Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

#products-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  left: 32px;
  /* position: absolute; */
  top: 16px;
  text-decoration: none;
  display: flex;
}

#products-link h1 {
  margin: 0;
}

#cart-link {
  display: flex;
  flex-direction: row-reverse;
}

.button {
  max-width: 200px;
  background-color: black;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 0px;
}
</style>
