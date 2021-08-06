/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

};
var desilu = new Dog();
var finnegan = new Dog();
console.log(desilu);
console.log(finnegan);

// Prompt 2: Snack
class Snack {

};
var nachos = new Snack();
var cookies = new Snack();
console.log(nachos);
console.log(cookies);

// Prompt 3: Shirt
class Shirt {

};
var flannel = new Shirt();
var polo = new Shirt();
console.log(flannel);
console.log(polo);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog {
  constructor() {
    this.size = "small";
    this.breed = "pomchi";
    this.age = 6;
  }
}
var desilu = new Dog();
console.log(desilu);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.flavor = "salty";
    this.isHealthy = false;
    this.temp = "hot";
  }
}
var nachos = new Snack();
console.log(nachos);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.isSoft = true;
    this.color = "blue";
    this.pattern = "stripes";
  }
}
var flannel = new Shirt();
console.log(flannel);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(size, breed, age) {
    this.size = size;
    this.breed = breed;
    this.age = age;
  }
}
var desilu = new Dog("small", "pomchi", 6);
var finnegan = new Dog("large", "golden retriever", 9);

console.log(desilu);
console.log(finnegan);

// Prompt 2: Snack
class Snack {
  constructor(flavor, isHealthy, temp) {
    this.flavor = flavor;
    this.isHealthy = isHealthy;
    this.temp = temp;
  }
}
var nachos = new Snack("cheesy", false, "hot");
var cookies = new Snack("sweet", false, "warm");

console.log(nachos);
console.log(cookies);

// Prompt 3: Shirt
class Shirt {
  constructor(isSoft, color, pattern) {
    this.isSoft = isSoft;
    this.color = color;
    this.pattern = pattern;
  }
}
var flannel = new Shirt(true, "blue", "stripes");
var polo = new Shirt(false, "red", "none");

console.log(flannel);
console.log(polo);
