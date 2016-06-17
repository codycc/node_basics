function Greetr() {
    this.greeting = 'Hello World';
    this.greet = function() { 
        console.log(this.greeting);
    }
} 
// EXPORTING a new INSTANCE OF THAT OBJECT
module.exports = new Greetr();