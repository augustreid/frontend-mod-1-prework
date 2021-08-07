// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Create new function buildBear with parameters for name, age, fur, clothes, special power.
function buildABear(name, age, fur, clothes, specialPower) {
// Create variable `greeting` assigned to the value of a string — bear introduces itself by name.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// Create variable `demographics` assigned value of an array containing the parameters `name` and `age`.
  var demographics = [name, age];
// Create variable `powerSaying` assigned to a string "Did you know that I can (specialPower)?).
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// Create object `builtBear` with properties with properties for: demographics, clothes, fur, cost, sayings, isCuddly.
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// return object builtBear
  return builtBear
}
// Run buildBear with arguments(fluffy, 4, brown, [pants, jorts, tanktop], give you nightmares).
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Run buildBear with arguments (sleepy, 2, purple, [pajamas, sleeping cap], sleeping in).
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Create function `FizzBuzz` with parameters (num1, num2, range).
function fizzBuzz(num1, num2, range) {
// Create for loop with i assigned value of 0, run if i is less than or equal to `range`, increase i by 1.
  for (var i = 0; i <= range; i++) {
// If the remainer of i/num1 is strictly equal to 0 AND remainder of i/num2 is strictly equal to 0, log "fizzbuzz."
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// Else if the remainder of i/num1 is strictly equal to 0, log "fizz."
    } else if (i % num1 === 0) {
      console.log('fizz');
// Else if the remainder of i/num2 is strictly equal to 0, log "buzz."
    } else if (i % num2 === 0) {
      console.log('buzz');
// Else, log i.
    } else {
      console.log(i);
    }
  }
}
// Pass arguments (3, 5, 100) into fizzBuzz.
fizzBuzz(3, 5, 100);
// Pass arguments (5, 8, 400) into fizzBuzz.
fizzbuzz(5, 8, 400);
