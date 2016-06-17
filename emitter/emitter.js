function Emitter() {
    this.events = {};
} 
// EXPLAINATION: Take the function type, and if the function type is there then attach it to this function(listener)
Emitter.prototype.on = function(type,listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// EXPLANATION: when emit is called, if its true then invoke the listener
// CHECK TO SEE IF A EVENT EMITS
Emitter.prototype.emit = function(type) {
// CHECK TO SEE IF ITS A PROPERTY NAME ON THE OBJECT
    if (this.events[type]) {
        // IF IT IS THEN ITS GOING TO BE AN ARRAY, AND LOOP THROUGH IT TO SEE IF THEIR IS ANY FUNCTION IN ARRAY AND EXECUTE THEM
        this.events[type].forEach(function(listener) {
            listener();
        })
    }
}

module.exports = Emitter;