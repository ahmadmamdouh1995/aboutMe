"use strict"
var yourName = prompt("Hi! What's your name?");
//console.log(yourName);
alert("Hey " + yourName + "!");

var mark = 0;

var myAge = prompt("Do you think my age is above 25?")
switch (myAge.toLowerCase()) {
    case "no":
    case "n":
        mark = mark + 1;
        //console.log("You're right! my age is below 25.");
        console.log(mark);

        alert("You're right! my age is below 25.");
        break;

    case "yes":
    case "y":
        //console.log("Wrong!");
        alert("Wrong!");
        break;
    default: prompt("only yes/no or y/n");

}



var myHobby = prompt("Do you think I like drawing?")
switch (myHobby.toLowerCase()) {
    case "no":
    case "n":
        //console.log("That's kinda true.. it's a love-hate relationship");
        alert("That's kinda true .. it's a love-hate relationship");
        break;

    case "yes":
    case "y":
        mark = mark + 1;
        //console.log("You're right! I like drawing but I hate it at the same time :(");
        console.log(mark);

        alert("You're right! I like drawing but I hate it at the same time :(");
        break;

    default: prompt("only yes/no or y/n");

}

var music = prompt("Do you think I like music?")
switch (music.toLowerCase()) {
    case "no":
    case "n":
        //console.log("You're not right. I do like music!");
        alert("You're not right. I do like music!");
        break;

    case "yes":
    case "y":
        mark = mark + 1;
        //console.log("That's right! I like all kinds of music!");
        console.log(mark);

        alert("That's right! I like all kinds of music!");
        break;

    default:
        prompt("Only yes or no answers");


}

var sing = prompt("Do you think I could sing?")
switch (sing.toLowerCase()) {
    case "no":
    case "n":
        mark = mark + 1;
        //console.log("Correct. I wish I could.");
        console.log(mark);

        alert("Correct but I wish I could.");
        break;

    case "yes":
    case "y":

        //console.log("That' incorrect but I wish I could!");
        alert("That' incorrect but I wish I could!");
        break;

    default: prompt("only yes/no or y/n");

}

var family = prompt("Do you think I am an only child?")
switch (family.toLowerCase()) {
    case "no":
    case "n":
        mark = mark + 1;
        console.log(mark);

        //console.log("That's true. I have 4 sisters and one brother.");
        alert("That's true. I have 4 sisters and one brother.");

        break;

    case "yes":
    case "y":
        //console.log("That's wrong. I have 4 sisters and one brother.");
        alert("That's wrong. I have 4 sisters and one brother.");
        break;

    default: prompt("only yes/no or y/n");

}


var myAge1 = prompt("What year do you think I was born in?");
for (var i = 0; i < 5; i++) {
    if (myAge1 > 1996) {

        myAge1 = prompt("Too HIGH! Try again.");

    }
    else if (myAge1 < 1996) {

        myAge1 = prompt("Too low! Try again.");
    }
}

if (myAge1 == 1996) {
    alert("That's RIGHT! I was born in 1996");
    mark = mark + 1;
    console.log(mark);

} else if (myAge1 !== 1996) {
    alert("I was born in 1996")

}




// var countries = ['KSA', 'Syria']
// var guess1 = prompt("What countries do you think I visited?");

// for (var d = 0; d < 7; d++) {
//     if (guess1 === countries[0] || guess1 === countries[1]) {

//         alert("You're right. I've visited " + guess1);
//         mark = mark + 1;
//         console.log(mark);

//         break;

//     } else {
//         guess1 = prompt("TRY again!");

//     }

// }


var countries = ['KSA', 'Syria', 'Jordan']
var guess1 = prompt("What countries do you think I visited?");
var test = false;

for (var attempts = 0; attempts < 6; attempts++) {

    var guess1 = prompt("What countries do you think I visited?");

    for (var i = 0; i < guess1.length; i++) {
        if (countries = guess1[i]) {
            alert("You're right. I've visited " + guess1);
            mark = mark + 1;
            console.log(mark);
            test = true;
            break;

        }
        if (test) {
            guess1 = prompt("Try again!");
        }
    }
}

    alert("The countries that I have visited are " + countries);

    alert("Your mark is " + mark + " out of 7");

    alert("Thanks " + yourName + " Make sure to comeback, I'll keep updating the Website!");