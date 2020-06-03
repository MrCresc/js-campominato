// Variabili iniziali
var livelloDifficolta = parseInt(prompt('Per prima cosa scegli il livello di difficoltà. Digita \"0\" per difficoltà facile, digita \"1\" per difficoltà intermedia oppure digita \"2\" per difficoltà difficile'));
var arrayBombe = [];

// Filtro valore difficoltà
while (livelloDifficolta !== 0 && livelloDifficolta !== 1 && livelloDifficolta !== 2) {
  livelloDifficolta = parseInt(prompt('Valore immesso errato! Scegli il livello di difficoltà. Digita \"0\" per difficoltà facile, digita \"1\" per difficoltà intermedia oppure digita \"2\" per difficoltà difficile'));
}
// Imposto numeri random e numeri possibili per l'utente a seconda della difficoltà
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
// Cheat attivabile per sapere i numeri dove sono posizionate le mine
console.log(arrayBombe)
// Variabili finali
var arrayUtente = []
var numeroUtente
var i = 0;
// Verifico che il numero non sia una bomba e che ci siano ancora numeri possibili
while (!arrayBombe.includes(numeroUtente) && i-1 < numeriPossibili) {
  numeroUtente = parseInt(prompt('Inserire un numero da 1 a 100 dove pensi non ci sia una bomba'));
  // Verifico che il valore immesso sia corretto o che non sia già stato scelto precedentemente
  while (numeroUtente < 1 || numeroUtente > 100 || isNaN(numeroUtente) || arrayUtente.includes(numeroUtente)) {
    if (numeroUtente < 1 || numeroUtente > 100 || isNaN(numeroUtente)) {
      numeroUtente = parseInt(prompt('Valore immesso errato! Inserire un numero da 1 a 100 dove pensi non ci sia una bomba'));
    } else {
      numeroUtente = parseInt(prompt('Valore immesso già scelto precedentemente! Inserire un numero da 1 a 100 dove pensi non ci sia una bomba'));
    }
  }
  arrayUtente.push(numeroUtente)
  i++;
}
// Mostro l'esito all'utente in caso di vittoria o sconfitta
if (i < numeriPossibili) {
  alert('Che peccato hai perso!!! Hai totalizzato ' + i + ' su ' + numeriPossibili)
} else {
  alert('HAI VINTO!!! Hai totalizzato ' + i + ' su ' + numeriPossibili)
}

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
