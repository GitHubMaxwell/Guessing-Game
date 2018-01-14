'use strict';
var guestName = prompt('please enter your name');
alert('Hello ' + guestName + '! Please answer the following 5 questions of my guessing game with a YES or a NO!');
console.log('Guest\'s name = ' + guestName);

var gameArray = [['Was I born in the USA?', 'Has it ever hailed in Saudi Arabia?', 'Do I hate pizza?', 'Have I been married?', 'Do I have an Saudi Arabian wild dog as a pet?'], ['YES','YES','NO','NO','YES'],['Nope, try again ' + guestName, 'You\'re right ' + guestName + '! Let\'s move on to the next one.']];

var userAnswerArray = [];

var keepScore = 0;

///////////////////// QUESTION 1-5 (DOESN'T WORK) ////////////////////////////////////

for (var i = 0; i < 6 ; i++) {

//this line is meant to create the array that holds the user inputs for comparison down below
    userAnswerArray.push(prompt(gameArray([0][i]))).toUpperCase();

    console.log('Question ' + i);
    console.log('Answer ' + i + ' = ' + userAnswerArray([i]));

    if (userAnswerArray([i]) === gameArray([1][i])) {
        alert(gameArray([3][1]));
        console.log(guestName + ' got Question ' + (i+1) + ' right on the first try');
        keepScore++;
    } else if (userAnswerArray([i]) !== gameArray([1][i])){
        
        while (userAnswerArray([i]) !== gameArray([1][i])){
            alert(gameArray([3][0]));
            userAnswerArray([i]) = prompt(gameArray([0][i])).toUpperCase();
            console.log(guestName + ' got Question ' + (i+1) + ' wrong AGAIN.');
            
            if (gameArray([2][i]) === gameArray([1][i]))  {
                alert(gameArray([3][1]));
                console.log(guestName + ' got Question' + (i+1) + 'right after saying no first.');
                keepScore--;
            }
        }
    } else {
        while (userAnswerArray([i]) !== gameArray([1][i])) {
            alert(gameArray([3][0]));
            userAnswerArray([i]) = prompt(gameArray([0][i])).toUpperCase();
            console.log(guestName + ' got Question ' + (i+1) + ' right after saying an invalid answer first.');
            
            if (userAnswerArray([i]) === gameArray([1][i]))  {
                alert(gameArray([3][1]));
                console.log(guestName + ' got Question ' + (i+1) + 'right after giving an invalid response first.');
                keepScore--;
            }
        }
    }
}

///////////////////// QUESTION 6 (WORKS) ////////////////////////////////////
// i took the random math generator from https://www.w3schools.com/jsref/jsref_random.asp

var rand = Math.floor((Math.random() * 3) + 1);
var answerSix = parseInt(prompt('Give me a number from 1 to 3? ' + rand));
console.log(rand);
console.log('User guess = ' + answerSix); 

for (var k = 0; k < 5; k++) {
    if (answerSix === rand) {
        alert('You got it');
        keepScore++;
        break;
    } else if (answerSix !== rand){
        alert('You got it wrong');
        var answerSix = parseInt(prompt('Give me a number from 1 to 3?' + rand));
        console.log('You got it wrong AGAIN');
        console.log('youve missed it ' + (k + 1) + ' times');
        if (k === 5) {
            alert('you got it wrong too many times');
            break;
        }
    }
}

///////////////////// QUESTION 7 (DOESN'T WORK) ////////////////////////////////////

var favFood = ['CHIPS', 'TACOS', 'BURGERS', 'PIZZA', 'SUSHI'];
var answerSeven = prompt('Guess what one of my favorite foods is?').toUpperCase();
console.log('Question 7');
console.log('Answer 7 = ' + answerSeven); 
// var counter = 0;

for (var j = 0; j < favFood.length;) {
    if (answerSeven === favFood[j]){
        console.log('you got it right');
        keepScore++;
        favFood.splice(j, 1);
        alert('you got it! I do like ' + favFood[j], 'I also like ' + favFood);
        break;
    } else if (answerSeven !== favFood[j]) {
        console.log('doesnt match anything in the array');
        var answerSeven = prompt('Nope, take another guess?').toUpperCase();
    }
}

//displays the user score
alert('Thank you for playing my guessing game ' + guestName + '! You scored ' + keepScore + ' out of 7 Questions.')