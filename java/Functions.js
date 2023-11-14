function tellFortune() {
e.preventDefult();
numOfChildren = document.getElementById("children").ariaValueMax;
partnerName = document.getElementById("partner").ariaValueMax;
jobTital = document.getElementById("job").ariaValueMax;

console.log(`you will be an ${jobTitle} , and married to ${partnerName}with ${numOfChildren} kids.`);
}

function calculateDogAge(puppyAge){
    puppyAge = document.getElementById("dog-age").value;
    dogAge = puppyAge * 7;
    document.getElementById(
        "age"
    ).innerHTML = `your dog is ${dogAge} years old`
}

function calculateSupply(age, amountPerDay){
    age = document.getElementById("current-age").value;
    amountPerDay = document.getElementById("amount-per-day").value;
    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear
  document.getElementById(
    "supply"
  ).innerHTML = `you will need ${totalAmount} to last you till the age of ${maxAge}`;
}

function calcCircumfrence(radius){
    radius = document.getElementById("radius").value;
    circumfrence = 2 * Math.PI * radius;
   document.getElementById(
    "circumfrence"
   ).innerHTML = `the circumfrence is ${circumfrence}`;
}

const calcArea =(radius) => console.log(`the area is ${Math.PI * radius * radius}`);

function celsiustoFahrenheit(celsius) {
   celsius = document.getElementById("celsius").value;
    fahrenheit = celsius * 9 / 5 + 32;
    Document.getElementById(fahrenheit).innerHTML = `${celsius} C is ${fahrenheit} F`;
}
function fahrenheitToCelsius(fahrenheit){
    celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit} F is ${celsius}`);
}
