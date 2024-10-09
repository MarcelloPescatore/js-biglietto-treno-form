// console.log('test');


// Descrizione:
//  Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1: 
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// set up 

// select the form
const formEl = document.querySelector('form')
// select the number of kilometers
const numberKmInputEl = document.getElementById('numberKm')
// select the traveler age
const numberAgeInputEl = document.getElementById('travelerAge')

// print in console the variables
console.log(formEl, numberAgeInputEl, numberKmInputEl);


// Create an event listner
formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const travelerAge = e.target.travelerAge.value;
    const numberKm = e.target.numberKm.value;

    console.log(numberKm, travelerAge);

    if (numberKm > 0 && travelerAge > 0) {

        // stamp the km in console
        const yourKm = `Km: ${numberKm}`;
        console.log(yourKm);
        
        // stamp the age in console
        const yourAge = `Età: ${travelerAge}`;
        console.log(yourAge);
        
        // Now set up the rules to find out the final price
        
        // First rule: find the ticket price
        let costKm = (numberKm * 0.21).toFixed(2) ;
        // stamp the final price without discount
        console.log(`Prezzo totale: ${costKm}€`);
        
        // Conditions for access to discount
        // Second rule: if the user age is minor than 18, apply a discount to costKm
        if (travelerAge < 18) {
            const discountAmount = (costKm * 20 /100).toFixed(2);
            const priceDiscounted = costKm - discountAmount;
            // stamp discount
            console.log(`Sconto applicato: -${discountAmount}€`);
            // fix the cost in 2 decimal
            const finalPrice = priceDiscounted.toFixed(2);
            // stamp the final price discounted
            console.log(`Prezzo totale scontato: ${finalPrice}€`);
        } 
        // Third rule: if the user age is higher than 65, apply a discount to costKm
        else if (travelerAge > 65){
            const discountAmount = (costKm * 40 /100).toFixed(2);
            const priceDiscounted = costKm - discountAmount;
            // stamp discount
            console.log(`Sconto applicato: -${discountAmount}€`);
            // fix the cost in 2 decimal
            const finalPrice = priceDiscounted.toFixed(2);
            // stamp the final price discounted
            console.log(`Prezzo totale scontato: ${finalPrice}€`);
        } 
    
    } else{
        console.log('Dati non validi');
    }
    
})




// MILESTONE 2: 
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.