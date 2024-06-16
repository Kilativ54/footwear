<script setup>
import MyHello from './components/MyHello.vue'
import { useRouter } from 'vue-router'
</script>

<template>
  <div >
    <header>
      <!-- <nav class="nav">
        <ul class="nav-list">
          <li><router-link to="/products">products</router-link></li>
          <li><router-link to="/products/123">products123</router-link></li>
          <li><router-link to="/cart">cart</router-link></li>
        </ul>
      </nav> -->
    </header>
    
    <main>
      <router-view></router-view>
    </main>
    
    <footer>
      <div class="footer-content">
        <h1>Vitalii</h1>
        <h2>R, V, A</h2>
        <MyHello />
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  padding: 20px;
}

.nav {
  margin-bottom: 20px;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
}

.nav-list li {
  display: inline;
}

.nav-list a {
  text-decoration: none;
  color: #007bff;
}

.nav-list a.router-link-exact-active {
  font-weight: bold;
}

.footer-content {
  margin-top: 50px;
  text-align: center;
}
</style>
