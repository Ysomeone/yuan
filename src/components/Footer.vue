<template>
<footer>
<p>{{copyright}}</p>
</footer>
</template>
<script>
export default{
   name:'helloword',
   data(){
   return {
     copyright:"copyright 2019"
   }
   }
}
</script>
<style  scoped>
footer{
 background:#222;
 padding:6px
}
p{
   color:lightgreen;
   text-align:center;
}
</style>
