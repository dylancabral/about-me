'use strict';
/* Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.

*/


let score = 0;

let username = prompt('What is your name?').toLowerCase();
function questionOne() {
  console.log('Thanks for coming to my page ' + username);
  if (username === 'kale' || username === 'sheyna') {
    alert('Whats up powerful coding overlords');
  } else {
    alert('hey welcome to my page, more important people got a differnt alert, Wish you were them dont you!.');
  }
}
questionOne();

// let dogs = prompt('Do I prefer dogs better over cats?').toLowerCase();
// if (dogs === 'yes' || dogs === 'y' || dogs === 'ya' || dogs === 'yup') {
//   // console.log('You are correct, I love dogs!');
//   alert('You are correct, I love dogs!');
//   score++;
// } else if (dogs === 'no' || dogs === 'nope' || dogs === 'nah' || dogs === 'n') {
//   //console.log('why on earth would I like cats more than dogs, they are great, but not superior Im sorry.');
//   alert('why on earth would I like cats more than dogs, they are great, but not superior Im sorry.');
// } else {
//   //console.log('You should answer with a yes or no!');
//   alert('You should answer with a yes or no!');
// }

function dogslike() {
  let dogs = prompt('Do I prefer dogs better over cats?').toLowerCase();
  if (dogs === 'yes' || dogs === 'y' || dogs === 'ya' || dogs === 'yup') {
    // console.log('You are correct, I love dogs!');
    alert('You are correct, I love dogs!');
    score++;
  } else if (dogs === 'no' || dogs === 'nope' || dogs === 'nah' || dogs === 'n') {
    //console.log('why on earth would I like cats more than dogs, they are great, but not superior Im sorry.');
    alert('why on earth would I like cats more than dogs, they are great, but not superior Im sorry.');
  } else {
    //console.log('You should answer with a yes or no!');
    alert('You should answer with a yes or no!');
  }
  dogslike();

  // let music = prompt('Is country music my favorite type music? Twangin and bangin!').toLowerCase();
  // if (music === 'yes' || music === 'y' || music === 'ya' || music === 'yup') {
  //   //console.log('actually I prefer Heavy music like Metalcore and Deathcore. Good try though, siked you out!');
  //   alert('actually I prefer Heavy music like Metalcore and Deathcore. Good try though, siked you out!');
  // } else if (music === 'no' || music === 'nope' || music === 'nah' || music === 'n') {
  //   //console.log('Good guess, Yeah I actually am a huge fan of heavier music like metalcore or deathcore! bluesier country is alright though.');
  //   alert('Good guess, Yeah I actually am a huge fan of heavier music like metalcore or deathcore! bluesier country is alright though.');
  //   score++;
  // } else {
  //   console.log('yes or no, Come on!');
  // }


  function favmusic() {
    let music = prompt('Is country music my favorite type music? Twangin and bangin!').toLowerCase();
    if (music === 'yes' || music === 'y' || music === 'ya' || music === 'yup') {
      //console.log('actually I prefer Heavy music like Metalcore and Deathcore. Good try though, siked you out!');
      alert('actually I prefer Heavy music like Metalcore and Deathcore. Good try though, siked you out!');
    } else if (music === 'no' || music === 'nope' || music === 'nah' || music === 'n') {
      //console.log('Good guess, Yeah I actually am a huge fan of heavier music like metalcore or deathcore! bluesier country is alright though.');
      alert('Good guess, Yeah I actually am a huge fan of heavier music like metalcore or deathcore! bluesier country is alright though.');
      //score++;
    } else {
      console.log('yes or no, Come on!');
    }
  }
  favmusic();

  function pc() {
    let computer = prompt('Is pc the masterrace?').toLowerCase();
    if (computer === 'yes' || computer === 'y' || computer === 'ya' || computer === 'yup') {
      //console.log('Ive had both! But I absolutley love my pc, probably Im a dweeb and love pc gaming!');
      alert('Ive had both! But I absolutley love my pc, probably Im a dweeb and love pc gaming!');
      score++;
    } else if (computer === 'no' || computer === 'nope' || computer === 'nah' || computer === 'n') {
      //console.log('WRONG! Macs are cool though too.');
      alert('WRONG! Macs are cool though too.');
    } else {
      //console.log('You seriously dont get it! Yes or No.');
      alert('You seriously dont get it! Yes or No.');
    }
  }
  pc();

  function kids() {
    let siblings = prompt('Am I an only child?').toLowerCase();
    if (siblings === 'yes' || siblings === 'y' || siblings === 'ya' || siblings === 'yup') {
      //console.log('actually I am the oldest of 4, probably would had more money growing but those are my little buds!');
      alert('actually I am the oldest of 4, probably would had more money growing but those are my little buds!');
    } else if (siblings === 'no' || siblings === 'nope' || siblings === 'nah' || siblings === 'n') {
      //console.log('Yeah, you got it, oldest of 4.');
      alert('Yeah, you got it, oldest of 4.');
      score++;
    } else {
      //console.log('I seriously cant with you, please for the love of a non denominational diety, yes or no!');
      alert('I seriously cant with you, please for the love of a non denominational diety, yes or no!');
    }
  }
  kids();

  function guessingGame() {
    let attempts = 4;
    let number = '13';
    let guess = prompt('At what age did I start listening to heavy music?');

    for (let i = 1; i < attempts; i++) {
      // attempts--; 
      console.log(attempts);
      console.log(i);
      if (guess === number) {
        alert('Thats correct, you got it!');
        score++;
      } else if (guess > number) {
        alert(`you have ${attempts - i} attempts remaining`);
        alert('Sorry, maybe try a little younger');
        guess = prompt('guess again!');

      } else if (guess < number) {
        alert('not quite that young, guess again');
        alert(`you have ${attempts - i} attempts remaining`);
        guess = prompt('guess again!');
      }
      if (i === attempts - 1) {
        console.log('you ran out of attempts the answer was 13');
      }

    }
  }
  guessingGame();

  function season() {
    let myFavSeason = ['summer', 'fall', 'hockey'];
    let attemptsRemaining = 7;
    while (attemptsRemaining) {
      let userGuess = prompt('What\'s my favorite season of the year?').toLowerCase();
      attemptsRemaining--;
      for (let i = 0; i < myFavSeason.length; i++) {
        if (userGuess === myFavSeason[i]) {
          alert('Yeah, I actually have 2, summer, fall, and hockey.');
          score++;
          attemptsRemaining = 0;
        }
      }
      if (attemptsRemaining) {
        alert(`You have ${attemptsRemaining} attempts remaining.`);
      }
    }
  }
  season();
  alert(`score  ${score} `);
