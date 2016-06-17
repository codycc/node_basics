function Greetr() {
    this.greeting = 'Hello World';
    this.greet = function() { 
        console.log(this.greeting);
    }
} 
// EXPORTING THE OBJECT CONSTRUCTOR ITSELF
module.exports = Greetr;