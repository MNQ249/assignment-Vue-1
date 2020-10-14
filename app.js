const app = Vue.createApp({

data(){
    return{
        myName: 'Mesfer',
        myAge: 30,
        // myAgeAfterFiveYear: '35'
       
    }
},
methods:{
result(){
    return Math.random();
   
},
calculateAge(){
return this.myAge + 5;
}
}

});

app.mount('#assignment');