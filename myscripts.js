

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