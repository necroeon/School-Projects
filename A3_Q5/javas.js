function display_c(){
    var refresh=1000;
    mytime=setTimeout('display_ct()',refresh)
    }
    function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x;
    display_c();
     }


//find
function findRequired()
{
var fname = document.forms["form1"]["fname"].value;
var lname = document.forms["form1"]["lname"].value;
var petPref = document.forms["form1"]["pet"].value;
var breedPref = document.forms["form1"]["breed"].value;
var agePref = document.forms["form1"]["age"].value;
var genderPref = document.forms["form1"]["gender"].value;
var getAlong = document.forms["form1"]["getalong"].value;

var validityString = "";
var isValid = true;

if (fname == "")
{
    validityString += "Please fill out First Name and try again\n" ;
    isValid = false;
}
if (lname == "")
{   
    validityString += "Please fill out Family Name and try again\n";
    isValid = false;
}
if (petPref == "")
{  
    validityString += "Please choose your Pet Preference and try again\n";
    isValid = false;
}
if (breedPref == "")
{
    validityString += "Please choose your Breed Preference and try again\n";
    isValid = false;
}
if (agePref == "")
{
    validityString += "Please choose your Age Preference and try again\n";
    isValid = false;
}
if (genderPref == "")
{
    validityString += "Please choose your Gender Preference for pet and try again\n";
    isValid = false;
}
if (getAlong == "")
{
    validityString += "Please choose if your new pet needs to along with any other pet/children and try again\n";
    isValid = false;
}

if(!isValid) {
    alert(validityString);
    return;
}
}

function giveRequired(){
var fname2 = document.forms["form2"]["fname2"].value;
var lname2 = document.forms["form2"]["lname2"].value;
var petPref2 = document.forms["form2"]["pet2"].value;
var breedPref2 = document.forms["form2"]["breed2"].value;
var agePref2 = document.forms["form2"]["age2"].value;
var genderPref2 = document.forms["form2"]["gender2"].value;
var getAlong2 = document.forms["form2"]["getalong2"].value;
var aboutPet2 = document.forms["form2"]["aboutpet2"].value;

var validityString2 = "";
var isValid2 = true;

if (fname2 == "")
{
    validityString2 += "Please fill out Current Owner's First Name and try again\n";
    isValid2 = false;
}
if (lname2 == "")
{   
    validityString2 += "Please fill out Current Owner's Family Name and try again\n";
    isValid2 = false;
}
if (petPref2 == "")
{  
    validityString2 += "Please choose which pet you are giving away and try again\n";
    isValid2 = false;
}
if (breedPref2 == "")
{
    validityString2 += "Please choose your pets Breed and try again\n";
    isValid2 = false;
}
if (agePref2 == "")
{
    validityString2 += "Please choose your pets Age and try again\n";
    isValid2 = false;
}
if (genderPref2 == "")
{
    validityString2 += "Please choose your pets Gender for pet and try again\n";
    isValid2 = false;
}
if (getAlong2 == "")
{
    validityString2 += "Please choose if your pet gets along with any other pet/children and try again\n";
    isValid2 = false;
}
if (aboutPet2 == "")
{
    validityString2 += "Please write something about your pet and try again\n";
    isValid2 = false;
}

if(!isValid2) {
    alert(validityString2);
    return;
}
var email = document.getElementById("myEmail").pattern;
    document.getElementById("demo").innerHTML = email;
}


function setTime(){
    var date = new Date();
    var n = date.toDateString();
    var time = date.toLocaleTimeString();
    document.getElementById('date').innerHTML = "Date: " + n + "<br> Time: " + time;
    }
    setInterval(setTime,50);