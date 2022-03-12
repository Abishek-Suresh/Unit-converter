function numConversion() {
    let num_input = document.getElementById("num-input").value;

    let meterToFeet = (num_input * 3.28084).toFixed(3);
    let feetToMeter = (num_input * 0.3048).toFixed(3);

    let literToGallon = (num_input * 0.264172).toFixed(3);
    let gallonToLiter = (num_input * 3.78541).toFixed(3);

    let kiloToPound = (num_input * 2.20462).toFixed(3);
    let poundToKilo = (num_input * 0.453592).toFixed(3);


    document.getElementById("length").textContent = num_input + " meters = " + meterToFeet + " feet | " + num_input + " feet = " + feetToMeter + " meters";

    document.getElementById("volume").textContent = num_input + " liters = " + literToGallon + " gallons | " + num_input + " gallons = " + gallonToLiter + " liters";

    document.getElementById("mass").textContent = num_input + " kilos = " + kiloToPound + " pounds | " + num_input + " pounds = " + poundToKilo + " kilos";
}
