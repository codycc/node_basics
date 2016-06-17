var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3'); 
greet3.greet();
greet3.greeting = 'Changed hello world';

// changes THE ACTUAL INSTANCE ITSELF
var greet3b = require('./greet3');
greet3b.greet();

// THIS IS CREATING NEW OBJECTS IN THIS FILE SINCE CONSTRUCTOR WAS EXPORTED, NOT A NEW OBJECT ITSELF
var Greet4 = require('./greet4');
var grtr = new Greet4();

grtr.greet();

var greet5 = require('./greet5').greet;
greet5();