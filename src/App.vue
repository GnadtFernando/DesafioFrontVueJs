<template>
  <div id= "app">
    <MyHeader />
    <MyHome/>
  </div> 
 
</template>

<script>
import './styles/global.css'

import MyHeader from './components/MyHeader'
import MyHome from './pages/MyHome'

export default {
  name: 'App',
  components: {
   MyHeader,
   MyHome
  }
}
</script>

