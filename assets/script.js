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
// select the name
const travelerName = document.getElementById('travelerName')
// select the number of kilometers
const numberKmInputEl = document.getElementById('numberKm')
// select the traveler age
const numberAgeInputEl = document.getElementById('travelerAge')
// select the card
const cardEl = document.querySelector('.card')
// select the alert
const alertEl = document.querySelector('.alert')

// print in console the variables
// console.log(formEl, numberAgeInputEl, numberKmInputEl);


// Create an event listner
formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const travelerAge = e.target.travelerAge.value;
    const numberKm = e.target.numberKm.value;
    const travelerName = e.target.travelerName.value

    console.log(numberKm, travelerAge);

    if (numberKm > 0 && travelerAge > 0 && travelerName.length > 0 && isNaN(travelerName) ) {

        // stamp the traveler name
        const yourName = `${travelerName}`;
        console.log(`Km: ${yourName}€`);

        // stamp the km in console
        const yourKm = `${numberKm}`;
        console.log(`Km: ${yourKm}€`);
        
        // stamp the age in console
        const yourAge = `${travelerAge}`;
        console.log(`Età: ${yourAge}€`);
        
        // Now set up the rules to find out the final price
        
        // First rule: find the ticket price
        let costKm = (numberKm * 0.21).toFixed(2) ;
        // stamp the final price without discount
        console.log(`Prezzo totale: ${costKm}€`);
        
        // show the list group
        const listGroupEl = `
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <span> <strong>Viaggiatore:</strong> ${yourName}</span>
                </li>
                <li class="list-group-item">
                    <span> <strong>Età del viaggiatore:</strong> ${yourAge}</span>
                </li>
                <li class="list-group-item">
                    <span> <strong>Chilometri:</strong> ${yourKm} km</span>
                </li>
                <li class="list-group-item">
                    <span> <strong>Prezzo totale:</strong> ${costKm} €</span>
                </li>      
            </ul>
        `
        console.log(listGroupEl);

        // add html to element card
        cardEl.insertAdjacentHTML('beforeend', listGroupEl)

        // select the list group
        const ulEl = document.querySelector('ul')

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
            
            // show more list group item
            const listGroupItemEl = `
                <li class="list-group-item">
                    <span> <strong>Sconto applicato:</strong> -${discountAmount} €</span>
                </li> 
                <li class="list-group-item">
                    <span> <strong>Prezzo totale scontato:</strong> ${finalPrice} €</span>
                </li>  
            `   
            console.log(listGroupItemEl);

            // add html to list group element
            ulEl.insertAdjacentHTML('beforeend', listGroupItemEl)
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

            // show more list group item
            const listGroupItemEl = `
                <li class="list-group-item">
                    <span> <strong>Sconto applicato:</strong> -${discountAmount} €</span>
                </li> 
                <li class="list-group-item">
                    <span> <strong>Prezzo totale scontato:</strong> ${finalPrice} €</span>
                </li>  
            `   
            console.log(listGroupItemEl);

            // add html to list group element
            ulEl.insertAdjacentHTML('beforeend', listGroupItemEl)
        } 
    
    } else{
        console.log('Dati non validi');

        // show an alert 
        alertEl.style.display = 'inline'
    }
    
});

// button refresh page
let annulla = document.getElementById("annulla")

annulla.addEventListener('click', function() {
    
    location.reload();
})




// MILESTONE 2: 
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.