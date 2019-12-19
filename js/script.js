alert('Ciao');
var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click',
function() {
  var inputNome = document.getElementById('nome');
  var nome = inputNome.value;
  console.log(nome);
  var inputKm = document.getElementById('km');
  var kmDaPercorrere = parseInt(inputKm.value);
  console.log(kmDaPercorrere);
  var fasciaEtaSelect = document.getElementById('fascia-eta');
  var fascia = fasciaEtaSelect.value;
  console.log(fascia);
  var prezzoKm = 0.21;
  var prezzoBiglietto = prezzoKm * kmDaPercorrere;
  console.log(prezzoBiglietto);
  var offerta = 'Tariffa Standard';
  if (fascia == 'minorenne') {
    prezzoBiglietto -= ((prezzoBiglietto * 20) / 100);
    offerta = 'Sconto Minorenne';
  } else if (fascia == 'over65') {
    prezzoBiglietto -= ((prezzoBiglietto * 40) / 100);
      offerta = 'Sconto Silver';
  }

  var carrozza = Math.floor(Math.random() * 9) + 1;
  console.log(carrozza);
  var cp = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;

  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('costo').innerHTML = prezzoBiglietto.toFixed(2);
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice').innerHTML = cp;
  var bigliettoDiv = document.getElementById('biglietto');
  bigliettoDiv.classList.remove('hidden');
  bigliettoDiv.classList.add('show');
}
);
var buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener('click',
function() {
  var bigliettoDiv = document.getElementById('biglietto');
  bigliettoDiv.classList.add('hidden');
  bigliettoDiv.classList.remove('show');
}
);
