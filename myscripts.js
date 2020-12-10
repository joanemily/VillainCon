let villainList = [];

document.addEventListener ('DOMContentLoaded', () => {
    //update villainList from csv file.
})
const password = () => 
{
//check to see if password typed in is correct
var pwValue = document.getElementById("password").value;
if (pwValue != 'LifeIsVile2021' || pwValue == null) {
//if incorrect, hide #home page and show #error page
document.getElementById("home").style.visibility = 'hidden';
document.getElementById("error").style.visibility = 'visible';
setInterval(decreaseCounter, 1000);
}
else if (pwValue == 'LifeIsVile2021') {
//if correct, hide #home page and show #details page
document.getElementById("home").style.visibility = 'hidden';
document.getElementById("rsvp").style.visibility = 'visible';
}

}

const villains = () => {
    //hide the #details page and show the #villains page.
    document.getElementById("rsvp").style.visibility = 'hidden';
    document.getElementById("villains").style.visibility = 'visible';
    //iterate through villainList and display all the names of those who are currently registered to come.
    let ul = document.createElement('ul');
    document.getElementById("allAttending").appendChild(ul);
    villainList.forEach(villain => {
        let list = document.createElement('li');
        ul.appendChild(list);
        list.innerHTML += villain.name;
    });
}
const thankYou = () => {
    //hide the #details page and show the #villains page.
    document.getElementById("rsvp").style.visibility = 'hidden';
    document.getElementById("thankYou").style.visibility = 'visible';
    setInterval(decreaseCounter, 1000);
}

const saveVillain = () => {
    //get the inputs from the villainName and email.
    var villainName = document.getElementById("villainName").value;
    var villainEmail = document.getElementById("email").value;
    //push them to the villainList.
    villainList.push({name: villainName, email: villainEmail});
    //save the new villains to csv.

    //hide the #villains page and show the #welcome page
    document.getElementById("villains").style.visibility = 'hidden';
    document.getElementById("welcome").style.visibility = 'visible';
    setInterval(decreaseCounter, 1000);

}



var counterElement = document.getElementsByClassName("timer");

// Count down the counter until 0
function decreaseCounter() {
// Convert counter text to a number
    var counter = Number(counterElement.textContent);
    counter -= 1;
    counterElement.textContent = counter;

    if (counter <= 0) {
        doSomething();
    } 
}

function doSomething() {
    document.getElementById("error").style.visibility = 'hidden';
    document.getElementById("welcome").style.visibility = 'hidden';
    document.getElementById("thankYou").style.visibility = 'hidden';
    document.getElementById("selfDestruct").style.visibility = 'hidden';
}