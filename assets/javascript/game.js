$(document).ready(function(){
//Pseudocode 
//Use some kind of random number generator and jQuery to display a random number in the Numer to Get Div
//Use a counter to count wins and losses
//Use random number generator to generate random number between 1-12 for the crystals
//Total score equals the sum of the values hidden in the crystal clicks

//Since I can't get the number generator to work, I just used click and alert functions for now.

    $('.matchNumber').on ('click', function(){
        alert("Generate Random Number from 19-120");
    })

    $('#red').on ('click', function(){
        alert("Ruby Random Number Between 1-12");
    })

    $('#blue').on ('click', function(){
        alert("Sapphire Random Number Between 1-12");
    })

    $('#yellow').on ('click', function(){
        alert("Topaz Random Number Between 1-12");
    })

    $('#green').on ('click', function(){
        alert("Emerald Random Number Between 1-12");
    })  
})


