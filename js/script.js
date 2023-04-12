const {createApp} = Vue;


createApp({

  data(){
    return{
      saluto: 'ciao',
      miaClasse: 'verde',
      altraClasse: 'maiuscolo',
      counter:0
    }
  },
  
  methods:{
    incrementaDecrementa(incr){

      if(incr) this.counter++;
      else this.counter--;

    }
  }

}).mount('#app')