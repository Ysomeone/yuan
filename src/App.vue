<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"> </users>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
  return{
      users:[
      {name:"yuan",position:"web开发",show:false},
      {name:"yuan",position:"web开发",show:false},
      {name:"yuan",position:"web开发",show:false},
      {name:"yuan",position:"web开发",show:false},
      {name:"yuan",position:"web开发",show:false},
      {name:"yuan",position:"web开发",show:false},
      {name:"yuan",position:"web开发",show:false},
      {name:"yuan",position:"web开发",show:false},
      {name:"yuan",position:"web开发",show:false},
      ],
      title:"传递一个i"
  }
  },
  method:{
   updateTitle(title){
    this.title=title;
   }
  },
  components:{
   "users":Users,
   "app-header":Header,
   "app-Footer":Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
