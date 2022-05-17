let welcome="Welcome"
alert (welcome+" Sign Up" )
let Name = prompt("Please enter your name" , "Dilmurod" )
let surName = prompt("Please enter your surName" , "Mamasaidov" )
let Age = prompt("Please enter your year of birth" , "2003" )
let currentYear= 2022
let Different = currentYear - Age 
let maxYoung=18
alert ('Your name: ' + Name + '\n' + 'Your surName: ' + surName + '\n' + 'Age: ' + Different)

if (Different >= maxYoung) {
  alert(" You go to the army");
} else {
  alert("You can't go to the army");
}

let num = prompt("Enter the number");
let juft = "pair";
let toq = "dash";
if (Number(num) % 2 == 1) {
   alert("Given number of dashs ");
} else {
  alert("Given number of pairs ");
}

