// Variabili iniziali
var livelloDifficolta = parseInt(prompt('Per prima cosa scegli il livello di difficoltà. Digita \"0\" per difficoltà facile, digita \"1\" per difficoltà intermedia oppure digita \"2\" per difficoltà difficile'));
var arrayBombe = [];

// Filtro valore difficoltà
while (livelloDifficolta !== 0 && livelloDifficolta !== 1 && livelloDifficolta !== 2) {
  livelloDifficolta = parseInt(prompt('Valore immesso errato! Scegli il livello di difficoltà. Digita \"0\" per difficoltà facile, digita \"1\" per difficoltà intermedia oppure digita \"2\" per difficoltà difficile'));
}

if (livelloDifficolta === 0) {
  arrayBombe = numeriRandomNonRipetuti(16,100)
  var numeriPossibili = 84
} else if (livelloDifficolta === 1) {
  arrayBombe = numeriRandomNonRipetuti(16,80)
  var numeriPossibili = 64
} else {
  arrayBombe = numeriRandomNonRipetuti(16,50)
  var numeriPossibili = 34
}

console.log(arrayBombe)
var arrayUtente = []
var numeroUtente = 0
var i = 0;

while (arrayBombe.includes(numeroUtente) || i < numeriPossibili) {
  numeroUtente = parseInt(prompt('Inserire un numero da 1 a 100 dove pensi non ci sia una bomba'));

  while (numeroUtente < 1 || numeroUtente > 100 || isNaN(numeroUtente) || arrayUtente.includes(numeroUtente)) {
    if (numeroUtente < 1 || numeroUtente > 100 || isNaN(numeroUtente)) {
      numeroUtente = parseInt(prompt('Valore immesso errato! Inserire un numero da 1 a 100 dove pensi non ci sia una bomba'));
    } else {
      numeroUtente = parseInt(prompt('Valore immesso già scelto precedentemente! Inserire un numero da 1 a 100 dove pensi non ci sia una bomba'));
    }
  }

  arrayUtente.push(numeroUtente)
  i++;
  console.log(arrayUtente)
}

alert('hai perso')




// var i = 0;
// var numeroUtente = parseInt(prompt('Inserire un numero da 1 a 100 dove pensi non ci sia una bomba'));
// while (numeroUtente < 1 || isNaN(numeroUtente) numeroUtente > 100) {
//   numeroUtente = parseInt(prompt('Valore immesso errato! Inserire un numero da 1 a 100 dove pensi non ci sia una bomba'));
// }
//
// while (i < numeriPossibili && !arrayBombe.includes(numeroUtente)) {
//   alert('BRAVO!!!')
//   var numeroUtente = parseInt(prompt('Inserire un altro numero dove pensi non ci sia una bomba'));
//
//
//   i++
// }
// if (i < numeriPossibili) {
//   alert('HAI PERSO!!! Hai totalizzato un punteggio di ' + i + ' su ' + numeriPossibili)
// } else {
//   alert('HAI VINTO!!! Hai totalizzato un punteggio di ' + i + ' su ' + numeriPossibili)
// }
//




// Funzione che calcola numeri non ripetuti
function numeriRandomNonRipetuti(quantitaNumeri, limiteNumeri) {
  var arrayBombe = [];
  for (var i = 0; i < quantitaNumeri; i++) {
    var singoloNumeroRandom = Math.floor(Math.random() * limiteNumeri) + 1;
    while (arrayBombe.includes(singoloNumeroRandom) === true) {
    singoloNumeroRandom = Math.floor(Math.random() * limiteNumeri) + 1;
    }
  arrayBombe.push(singoloNumeroRandom)
  }
  arrayBombe.sort()
  return arrayBombe;
}

// Funzione che controlla se un numero immesso dall'utente è già stato inserito in precedenza
function numeriUtenteRipetuti(numero,arrayUtente) {
  var arrayUtenteRipetuti = false;
  if (arrayUtente.includes(numero)) {
    arrayUtenteRipetuti = true;
  }
  return arrayUtenteRipetuti;
}
