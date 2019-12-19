// alert('Hello World!');
var numero = parseInt(prompt('inserisci il numero di chilometri'));
console.log(numero);
var eta = parseInt(prompt('inserisci la tua eta'));
console.log(eta);
var prezzo = numero * 0.21;
console.log(prezzo);
var prezzoMinorenni = (prezzo -(prezzo * 20) / 100);
// console.log(prezzoMinorenni);
var prezzoOver = (prezzo -(prezzo * 40) / 100);
// console.log(prezzoOver);
if (eta < 18) {
alert(prezzoMinorenni);
} else if (eta > 65) {
alert(prezzoOver);
} else {
alert(prezzo);
}
document.getElementById('prezzo-base').innerHTML= 'Con un viaggio di 80km, il prezzo base sarà di € '+ prezzo;
document.getElementById('offertra-young').innerHTML= 'la tua tariffa sarà di € '+ prezzoMinorenni + ' rispetto a € ' + prezzo;
document.getElementById('offerta-senior').innerHTML='la tua tariffa sarà di € '+ prezzoOver + ' rispetto a € ' + prezzo;
