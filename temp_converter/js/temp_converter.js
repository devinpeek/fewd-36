// // Structure
// // -------------------------------------
var tempC=document.getElementById("tempC");
var tempF=document.getElementById("tempF");
var button=document.getElementById("button");
	
// // Events
// // -------------------------------------
button.addEventListener("click", calcFtoC);
button.addEventListener("click", calcCtoF);


// // Event handler functions
// // -------------------------------------
function calcFtoC(event){
	var tempF_result = document.getElementById("tempF").value;
	var tempC_result = (tempF_result - 32) * 5/9;
	tempC.value = Math.round(tempC_result);
}

function calcCtoF(event){
	var tempC_result = document.getElementById("tempC").value;
	var tempF_result = tempC_result * 9/5 + 32;
	tempF.value = tempF_result;
}


