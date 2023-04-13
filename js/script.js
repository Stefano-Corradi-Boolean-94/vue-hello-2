const {createApp} = Vue;
import pizze from './db.js'


createApp({

  data(){
    return{
      saluto: 'ciao',
      miaClasse: 'verde',
      altraClasse: 'maiuscolo',
      counter:0,
      image:{
        src: 'img/bosco.jpg',
        alt: 'Bosco'
      },
      colori:['rosso','verde','blu'],
      pizze,
      mostraTesto: true,
      counterBox:5,
      clock:'00:00:00'
    }
  },
  
  methods:{
    incrementaDecrementa(incr){

      if(incr) this.counter++;
      else this.counter--;

    },

    mostraColori(){
      console.log(this.colori)
      console.log(this.image)
    },

    getClock(){
      const d = new Date();
      this.clock = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    },

    startClock(){

      // in questo caso devo usare una arrow function per ereditare il this di vue
      setInterval(() => {
        this.getClock();
      },1000)
    }

  },

  mounted(){
    // questa funzione viene invocata quando l'app è pronta
    // qui faccio partire delle funzionalità al lanciio dell'app
    console.log('APP MONTATA');
    // al mounted attivo le funzioni per la partenza dell'app
    this.mostraColori();
    // richiamo starttClock per stampare l'orologio prima della timing funciton
    this.getClock();
    // lancio la funzione che attiva la timing function
    this.startClock();
  },
  
  created(){
    console.log('APP CREATA');
    
  }

}).mount('#app')
