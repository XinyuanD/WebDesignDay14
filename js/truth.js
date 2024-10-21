let fname = "";
function greet() {
    let greetParagraph = document.getElementById("greet");
    greetParagraph.style.color = "green"

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " years old " + fname + " " + lname;

}

function trivia1() {
    let answer = document.getElementById("trivia1-answer");

    // get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (honeySelected) {
        answer.innerHTML = "Congratulations, " + fname + ", you are correct!";
    }
    else if (chocolateSelected) {
        answer.innerHTML = "Sorry, " + fname + ", you are wrong. Sweet tooth, eh?";
    }
    else if (tunaSelected) {
        answer.innerHTML = "Sorry, " + fname + ", you are wrong. Rotten tuna, yuck!";
    }
}

function trivia2() {
    let answer = document.getElementById("trivia2-answer");

    let lieSelected = document.getElementById("lie").checked;

    if (lieSelected) {
        answer.innerHTML = fname + ", you are correct! I have been playing Go for over 10 years, not chess";
    }
    else {
        answer.innerHTML = "Nope, " + fname + ", that's a truth!";
    }
}