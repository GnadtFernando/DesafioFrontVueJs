<template>
  <div id= "app">
    <MyHeader />
    <MyHome/>
    <PostComponent/>
  </div> 
 
</template>

<script>
import './styles/global.css'

import MyHeader from './components/MyHeader'
import MyHome from './pages/MyHome'
import PostComponent from './pages/MyPost'

export default {
  name: 'App',
  components: {
   MyHeader,
   MyHome,
   PostComponent
  }
}
</script>

