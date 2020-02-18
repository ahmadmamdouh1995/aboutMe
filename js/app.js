"use strict"
var yourName=prompt("Hi! What's your name?");
//console.log(yourName);
alert("Hey "+yourName+"!");

var myAge=prompt("Do you think my age is above 25?")
switch(myAge.toLowerCase()) {
    case "no":
    case "n":
        //console.log("You're right! my age is below 25.");
        alert("You're right! my age is below 25.");
    break;

    case "yes":
    case "y":
        //console.log("Opps.. close enough. I'm still 24");
        alert("Opps.. close enough but I'm still 24");
    break;
}


var myHobby=prompt("Do you think I like drawing?")
switch(myHobby.toLowerCase()) {
    case "no":
    case "n":
        //console.log("That's kinda true.. it's a love-hate relationship");
        alert("That's kinda true .. it's a love-hate relationship");
    break;

    case "yes":
    case "y":
        //console.log("You're right! I like drawing but I hate it at the same time :(");
        alert("You're right! I like drawing but I hate it at the same time :(");
    break;


}

var music=prompt("Do you think I like music?")
switch(music.toLowerCase()) {
    case "no":
    case "n":
        //console.log("You're not right. I do like music!");
        alert("You're not right. I do like music!");
    break;

    case "yes":
    case "y":
        //console.log("That's right! I like all kinds of music!");
        alert("That's right! I like all kinds of music!");
    break;

    default: 
    alert("Only yes or no answers");
        

}

var sing=prompt("Do you think I could sing?")
switch(sing.toLowerCase()) {
    case "no":
    case "n":

        //console.log("Correct. I wish I could.");
        alert("Correct but I wish I could.");
    break;

    case "yes":
    case "y":

        //console.log("That' incorrect but I wish I could!");
        alert("That' incorrect but I wish I could!");
    break;
        

}

var family=prompt("Do you think I am an only child?")
switch(music.toLowerCase()) {
    case "no":
    case "n":
        //console.log("That's true. I have 4 sisters and one brother.");
        alert("That's true. I have 4 sisters and one brother.");
    break;

    case "yes":
    case "y":
        //console.log("That's wrong. I have 4 sisters and one brother.");
        alert("That's wrong. I have 4 sisters and one brother.");
    break;   
    

}

alert("Thanks "+yourName+" Make sure to comeback, I'll keep updating the Website!");
