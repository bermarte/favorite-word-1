'use strict';

console.log('--- loading prompt --> ');

/**
 * prompts the user for a number, casts and validates their input
 * it will prompt the user until a valid number is entered
 * @param {string} [message='enter a number'] - the text displayed to the user
 * @returns {number} a number cast from the user input (never NaN)
 */
const enterNumber = (message='enter a number') => { 
  
  let numOut;

  while (true) {

    //message = 'how many times would you like to repeat the word';
    const repetition = prompt(message);

    if (repetition === null || repetition.trim() === '') {
      alert('nope, gotta enter something.');
      continue;
    }

    else if (!(Number.isInteger(Number(repetition))) && (Number(repetition) > 0)) {
      alert(`"${repetition}" is not a number`);
      continue;
    }

    const confirmedRepetition = confirm(`is this correct?`);

    if (!confirmedRepetition) {
      continue;
    }

    else { 

      numOut = Number(repetition);
      return numOut;

    }
    
  }

};


{
  // store I/O functions and console.log for later
  const consoleLog = console.log;
  const globalPrompt = prompt;
  const globalConfirm = confirm;
  const globalAlert = alert;
  // over-write non-interactive I/O with empty functions
  alert = () => { };
  console.log = () => { };
  // a function that simulates a user inputting a series of values
  const mockUser = (values, index = 0) => () => values[index++];

  try {
    prompt = mockUser(['0', '1']);
    confirm = mockUser([false, true]);
    console.assert(enterNumber() === 1, 'Test 1');

    prompt = mockUser(['3']);
    confirm = mockUser([true]);
    console.assert(enterNumber() === 3, 'Test 2');

    prompt = mockUser(['x', '2', '1']);
    confirm = mockUser([false, true]);
    console.assert(enterNumber() === 1, 'Test 3');

    prompt = mockUser(['a', '1', 'b', '2']);
    confirm = mockUser([false, true]);
    console.assert(enterNumber() === 2, 'Test 4');
  } catch (err) {
    console.error(err);
  }

  // reassign the global functions now that testing is over
  prompt = globalPrompt;
  confirm = globalConfirm;
  alert = globalAlert;
  console.log = consoleLog;
}
