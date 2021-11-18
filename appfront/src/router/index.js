import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import About from '@/components/About'
import Productcatalogue from '@/components/Product/Product-catalogue'
import Rent from '@/components/Rent'
import News from '@/components/News'
import Booking from '@/components/Booking'
import Bookinglist from '@/components/Booking-list'
import Cart from '@/components/Cart'
import Creative from '@/components/Creative'
import Course from '@/components/Course'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/Product-catalogue',
      name: 'Product-catalogue',
      component: Productcatalogue
    },
    {
      path: '/rent',
      name: 'rent',
      component: Rent
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },   
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/creative',
      name: 'Creative',
      component: Creative
    }, 
    {
      path: '/course',
      name: 'Course',
      component: Course
    },    
  ]
})





