import{_ as a,o as c,c as r,d as n,t as d,a as i}from"./index-cdbfea9c.js";const p={name:"Product",data(){return{product:{}}},mounted(){const{id:t}=this.$route.params,e=`https://vue3-course-api.hexschool.io/v2/api/chris0000/product/${t}`;this.$http.get(e).then(()=>{this.product=res.data.product}).catch(s=>{alert(s.response.data.message)})}},u={class:"about"},h=i("h1",null,"This is 單一產品頁面",-1);function _(t,e,s,l,o,m){return c(),r("div",u,[h,n(" "+d(o.product.title),1)])}const f=a(p,[["render",_]]);export{f as default};
