// Chiedo i chilometri da percorrere tramite il prompt
let km = prompt('Inserisci i chilometri da percorrere');
km = parseInt(km);

// Chiedo l'età tramite il prompt
let age = prompt('Inserisci la tua età')
age = parseInt(age);

// Imposto il prezzo in base ai chilometri
let price = (0.21 * km);
let finalPrice = price.toFixed(2); // Con questo arrotondo a due numeri dopo la virgola

// Imposto il prezzo per i minorenni
let underAgedPrice = (0.21 * km) - (km * 0.21 * 0.2);
let finalUnderAgedPrice = underAgedPrice.toFixed(2);

// Imposto il prezzo per gli anziani
let overAgedPrice = (0.21 * km) - (km * 0.21 * 0.4);
let finalOverAgedPrice = overAgedPrice.toFixed(2);

let outputHTML = document.getElementById("price");
let discountHTML = document.getElementById('discount')

if (age < 18){
    outputHTML.innerHTML = `Il prezzo del biglietto è di: <b>${finalUnderAgedPrice}</b> €`;
    discountHTML.innerHTML = `<del>Prezzo originale: <b>${finalPrice} €</b></del><br>Ha diritto allo sconto minorenni`;
} else if (age > 65){
    outputHTML.innerHTML = `Il prezzo del biglietto è di: <b>${finalOverAgedPrice}</b> €`;
    discountHTML.innerHTML = `<del>Prezzo originale: <b>${finalPrice} €</b></del><br> Ha diritto allo sconto anziani`;
} else{
    outputHTML.innerHTML = `Il prezzo del biglietto è di: <b>${finalPrice}</b> €`;
}

let kmNumberHTML = document.getElementById('km-number')

kmNumberHTML.innerHTML = km

