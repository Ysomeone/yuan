<template>
<header v-on:click="changeTitle">
<h1>{{title}}</h1>
</header>
</template>
<script>
export default{
   name:'helloword',
   props:{
     title:{
     type:String
     }
   },
   data(){
   return {
     title1:"vue.js demo"
   }
   },
    methods:{
       changeTitle:function(){
       this.$emit("titleChanged","子向父传值");
       }
    }
}
</script>
<style  scoped>
header{
 background:lightgreen;
 padding:10px
}
h1{
   color:#222;
   text-align:center;
}
</style>
