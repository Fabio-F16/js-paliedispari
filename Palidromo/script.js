console.log('js ok')


// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// funzione per dividere il testo (split), invertirlo (reverse) e rimetterlo assieme (join)
function invertiParola(stringa){
    var parolaInversa = stringa.split('').reverse().join('');  
    return parolaInversa;
}
// fine funzione


let parola = prompt('Inserisci una parola!'); // chiedo la parola

let parolaAlContrario = invertiParola(parola); // applico la funzione per invertire la parola

console.log(parolaAlContrario);

// controllo se parola è uguale a parolaAlContrario o meno 
if(parola === parolaAlContrario){
    console.log('la parola è palindroma!')
}else{
    console.log('la parola non è palindroma')
}

