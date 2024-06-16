import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/products',
      name: 'Products',
      component: ProductsPage
    },
    {
      path: '/products/:id',
      name: 'ProductDetail',
   component: ProductDetailPage,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartPage
    },
    {
      path: '/',
      redirect: '/products',
    }
  ]
})

export default router
