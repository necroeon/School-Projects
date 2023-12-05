var button = document.getElementById("sum");
button.addEventListener("click" , function(e){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var n3 = parseInt(document.getElementById('n3').value);

    var isValid = true;
    var validityString = "";

    if(n1.length == 0 || isNaN(n1)) {
        isValid = false;
        validityString += "The quantity for 'Basic HTML' is invalid!\n"
    }
    if(n2.length == 0 || isNaN(n2)) {
        isValid = false;
        validityString += "The quantity for 'Intro to PHP' is invalid!\n"
    }
    if(n3.length == 0 || isNaN(n3)) {
        isValid = false;
        validityString += "The quantity for 'Advanced JQuery' is invalid!\n"
    }
    if(n1 < 0) {
        validityString += "The quantity for 'Basic XHTML' must be greater than equal to 0!\n";
        isValid = false;
    }
    if(n2 < 0) {
        validityString += "The quantity for 'Intro to PHP' must be greater than equal to 0!\n";
        isValid = false;
    }
    if(n3 < 0) {
        validityString += "The quantity for 'Advanced JQuery' must be greater than equal to 0!\n";
        isValid = false;
    }

    if(!isValid) {
        alert(validityString);
        return;
    }

    validityString = "";
    isValid = true;

    document.getElementById('result1').innerHTML = "Basic XHTML (Quantity = "+ n1 + "): $" + (n1 * 19.99);
    document.getElementById('result2').innerHTML = "Intro to PHP (Quantity = " + n2 + "): $" + (n2 * 86.00);
    document.getElementById('result3').innerHTML = "Advanced JQuery (Quantity = " + n3 + "): $" + (n3 * 55.00);

    document.getElementById('total').innerHTML = "Final Total: $" +  (n1 * 19.99 + n2 * 86.00 + n3 * 55.00);
})



















