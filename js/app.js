'use strict'

let booleanValue =true;

if(booleanValue === true ) {
  console.log("if condition is true this will print in the console")
}

let trueValue = true;
let falseValue = false;

let username = prompt('What is your name?');
document.write('Thanks for coming to my page ' + username );
if (username === "kale" || username === "sheyna" ){
  alert('Whats up powerful coding overlords');
} else {alert('hey welcome to my page, more important people got a differnt alert, Wish you were them dont you!.');
}

let dogs = prompt('Do I prefer dogs better over cats?').toLowerCase();
if (dogs === 'yes'|| dogs ==='y'|| dogs === 'ya' || dogs === 'yup'){
  // console.log("You are correct, I love dogs!");
  alert("You are correct, I love dogs!");
 } else if (dogs === 'no' || dogs === 'nope' || dogs === 'nah' || dogs === 'n'){
    //console.log('why on earth would I like cats more than dogs, they are great, but not superior Im sorry.');
    alert('why on earth would I like cats more than dogs, they are great, but not superior Im sorry.');
 } else {
    //console.log('You should answer with a yes or no!');
    alert('You should answer with a yes or no!');
 }

 let music = prompt('Is country music my favorite type music? Twangin and bangin!').toLowerCase();
 if (music === 'yes'|| music ==='y'|| music === 'ya' || music === 'yup'){
   //console.log('actually I prefer Heavy music like Metalcore and Deathcore. Good try though, siked you out!');
   alert('actually I prefer Heavy music like Metalcore and Deathcore. Good try though, siked you out!');
  } else if (music === 'no' || music === 'nope' || music === 'nah' || music === 'n'){
    //console.log('Good guess, Yeah I actually am a huge fan of heavier music like metalcore or deathcore! bluesier country is alright though.');
    alert('Good guess, Yeah I actually am a huge fan of heavier music like metalcore or deathcore! bluesier country is alright though.');
  } else {
     console.log('yes or no, Come on!');
  }

  let computer = prompt("Is pc the masterrace?").toLowerCase();
if (computer === 'yes'|| computer ==='y'|| computer === 'ya' || computer === 'yup'){
  //console.log('Ive had both! But I absolutley love my pc, probably Im a dweeb and love pc gaming!');
  alert('Ive had both! But I absolutley love my pc, probably Im a dweeb and love pc gaming!');
 } else if (computer === 'no' || computer === 'nope' || computer === 'nah' || computer === 'n'){
  //console.log('WRONG! Macs are cool though too.');
  alert('WRONG! Macs are cool though too.');
 } else {
    //console.log('You seriously dont get it! Yes or No.');
    alert('You seriously dont get it! Yes or No.');
 }

 let siblings = prompt("Am I an only child?").toLowerCase();
if (siblings === 'yes'|| siblings ==='y'|| siblings === 'ya' || siblings === 'yup'){
  //console.log('actually I am the oldest of 4, probably would had more money growing but those are my little buds!');
  alert('actually I am the oldest of 4, probably would had more money growing but those are my little buds!');
 } else if (siblings === 'no' || siblings === 'nope' || siblings === 'nah' || siblings === 'n'){
  //console.log('Yeah, you got it, oldest of 4.');
  alert('Yeah, you got it, oldest of 4.');
 } else {
    //console.log('I seriously cant with you, please for the love of a non denominational diety, yes or no!');
    alert('I seriously cant with you, please for the love of a non denominational diety, yes or no!');
 }
 
 
