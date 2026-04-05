const NIGHT_COST = 280;
const GUEST_COST = 150;
const RENTAL_COST = 10;
const KHOUR_COST = 15;
const BREAKFAST_COST = 30;

// set up form when loading the page
window.addEventListener("load", setupForm);


// default form values
function setupForm () {
	document.getElementById("reserveNights").value = 1;
	document.getElementById("guestNum").value = 1;
	document.getElementById("kayakRent").checked = false;
	document.getElementById("kayakHour").value = 0;
	document.getElementById("breakfast").checked = false;
	
	//calculate total on change
	getTotal();
	
document.getElementbyId("reserveNights").onchange = getTotal;
document.getElementbyId("guestNum").onchange = getTotal;
document.getElementbyId("kayakRent").onchange = getTotal;
document.getElementbyId("kayakHour").onchange = getTotal;
document.getElementbyId("breakfast").onchange = getTotal;

}

function getTotal () {
	
	let totalCost = 0;
	let nightly = document.getElementById("reserveNights").value;
	let perGuest = document.getElementById("guestNum").value;
	let buyKayak = document.getElementById("kayakRent").checked;
	let hourly = document.getElementById("kayakHour").value;
	let buyBreakfast = document.getElementById("breakfast").checked;
	
	
	// add cost per night, hour, and guest
	totalCost += nightly * NIGHT_COST;
	totalCost += perGuest * GUEST_COST;
	totalCost += hourly * KHOUR_COST;

	// add to total cost if the kayak rentals or breakfast is purchased
	totalCost += buyKayak ? RENTAL_COST : 0;
	totalCost += buyBreakfast ? BREAKFAST_COST : 0;
	
	// display total price
	document.getElementById("totalPrice").innerHTML = "$" + totalCost;
	
}

// calculate total on click
document.getElementById("kayakRent").onclick = getTotal;
document.getElementById("breakfast").onclick = getTotal;
document.getElementById("reserveNights").onclick = getTotal;
document.getElementById("kayakHour").onclick = getTotal;
document.getElementById("guestNum").onclick = getTotal;
