console.log('js ok')


// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// funzione per dividere il testo e lo trasforma in arrey (split), lo inverte con (reverse) e lo rimette assieme, è l'inverso di split (join)
// function invertiParola(stringa){
//     var parolaInversa = stringa.split('').reverse().join('');  
//     return parolaInversa;
// }
// // fine funzione


// let parola = prompt('Inserisci una parola!'); // chiedo la parola

// let parolaAlContrario = invertiParola(parola); // applico la funzione per invertire la parola

// console.log(parolaAlContrario);

// // controllo se parola è uguale a parolaAlContrario o meno 
// if(parola === parolaAlContrario){
//     console.log('la parola è palindroma!')
// }else{
//     console.log('la parola non è palindroma')
// }




// correzione Adriano

// chiedi la parola
let word = prompt('Inserisci una parola');

// chiedi la parola finchè la parola è false o ha lunghezza zero
while (!word || word.length === 0){
    let word = prompt('Inserisci una parola');
}
console.log(word);  




// funzione per invertire la parola
function invertWord(wordArgument){

    let inverted = '';
    // creo un ciclo che va da zero alla lunghezza massima della stringa
    for( let i = 0; i < wordArgument.length; i++){
    // recupero il carattere all'interno della stringa alla posizione [i]
        const char = wordArgument.charAt(i);
        // console.log(char);
        inverted = char + inverted;
    }
    return inverted;
}
// fine funzione per invertire la parola


const invertedWord = invertWord(word);
console.log(invertedWord);  


// controllo if and else, si poteva anche ricreare un'altra funzione
if (word === invertedWord){
    console.log('la parola è palindroma');
}else{
    console.log('la parola non è palindroma');
}
// fine correzione Adriano