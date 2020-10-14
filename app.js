const app = Vue.createApp({

data(){
    return{
        myName: 'Mesfer',
        myAge: 30,
        imageURL: 'https://www.orogoldcosmetics.com/wp-content/uploads/2018/06/OROGOLD-Nature-vs-Nurture.jpg',
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