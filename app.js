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
    const randomNumber = Math.random();
    if (randomNumber < 0.5){
        return 0;
    }
    else{
        return 1;
    }
},
calculateAge(){
return this.myAge + 5;
}
}

});

app.mount('#assignment');