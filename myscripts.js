let villainList = [];
const CSVtoJSON = require("csvtojson");
const JSONtoCSV = require("json2csv").parse;
const fileSystem = require("fs");
const requireJS = require("requirejs");

requirejs.config({
    nodeRequire: require
});

const password = () => 
{
//check to see if password typed in is correct
var pwValue = document.getElementById("password").value;
if (pwValue != 'LifeIsVile2021' || pwValue == null) {
//if incorrect, hide #home page and show #error page
document.getElementById("home").style.visibility = 'hidden';
document.getElementById("error").style.visibility = 'visible';
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
    //get villainList from csv file.
    async () => {
        villainList = await CSVtoJSON().fromFile("villains.csv");
    }
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
}

const saveVillain = () => {
    //get the inputs from the villainName and email.
    var villainName = document.getElementById("villainName").value;
    var villainEmail = document.getElementById("email").value;
    //push them to the villainList.
    villainList.push({name: villainName, email: villainEmail});
    //save the new villains to csv.
    const villainToCSV = new JSONtoCSV({fields: ["name", "email"]}).parse(villainList);
    fileSystem.writeFileSync("villain.csv", villainToCSV);
    //hide the #villains page and show the #welcome page
    document.getElementById("villains").style.visibility = 'hidden';
    document.getElementById("welcome").style.visibility = 'visible';

}
