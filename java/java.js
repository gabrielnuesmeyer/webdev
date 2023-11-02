 const myName = "gabe"

 let favColor = "blue"

 favColor = "red"

    console.log(favColor)

 let age = 17

 mainperson = {
    name: "gabe",
    age: 17,
    favColor: "blue",
    favFoods: ["steak","ice creams","pizza"]
 }

 favThings = [2,"movies"]

 const isAlive = true;

 function describePerson(person) {
    alert("MISSING PERSON ALERT: " + person.name)
    console.log(`MISSING PERSON ALERT: ${person.name} missing since 2022`)
 }
describePerson(mainperson)

if (age > 17 && age < 30){
   alert("your no your way to 18.")
} else  if(age < 17) {
   alert("your a baby")
}

document.getElementById("title").innerHTML = `hello ${myName}`

const para = document.createElement("p")
para.innerHTML = "im the paragraph you just made."
document.getElementById("body").appendChild(para)
