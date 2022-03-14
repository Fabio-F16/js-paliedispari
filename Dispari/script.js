// console.log('js ok');

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */



// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function generaNumeroRandom(min, max){

    const range = max - min + 1;
    const generatedNumber = Math.floor(Math.random()*range) + min;
    return generatedNumber;

}
// fine funzione numero randomico 


// inizio funzione per: il numero è pari?
function even(num){
    if (num % 2 === 0){
        return 'even';
    }
}
// fine funzione per: il numero è pari?

// inizio funzione per: il numero è dispari?
function odd(num){
    if (num % 2 !== 0){
        return 'even';
    }
}
// fine funzione per: il numero è dispari?






let somma = 0;

const buttonPari = document.querySelector ('.pari');

buttonPari.addEventListener("click", function(){

    userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))  // numero scelto dall'utente
    console.log('il tuo numero è ' + userNumber);                  // numero scelto dall'utente


    let cpuNumber = generaNumeroRandom(1, 5);                      // numero randomico per cpu
    console.log('il numero del computer è ' + cpuNumber);          // numero randomico per cpu
    

    somma = userNumber + cpuNumber;                               // somma tra cpu e user    
    console.log('la somma è ' + somma);                           // somma tra cpu e user 

    if (even(somma)){
        console.log('Il numero è pari, hai vinto!')
    }else{
        console.log('Mi dispiace, hai perso :-(')
    }

})



const buttonDispari = document.querySelector ('.dispari');

buttonDispari.addEventListener("click", function(){

    userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))  // numero scelto dall'utente
    console.log('il tuo numero è ' + userNumber);                  // numero scelto dall'utente


    let cpuNumber = generaNumeroRandom(1, 5);                      // numero randomico per cpu
    console.log('il numero del computer è ' + cpuNumber);          // numero randomico per cpu
    

    somma = userNumber + cpuNumber;                               // somma tra cpu e user    
    console.log('la somma è ' + somma);                           // somma tra cpu e user 

    if (odd(somma)){
        console.log('Il numero è dispari, hai vinto!')
    }else{
        console.log('Mi dispiace, hai perso :-(')
    }

})
