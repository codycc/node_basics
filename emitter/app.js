var Emitter = require('./emitter');

var emtr = new Emitter();
var emtr2 = new Emitter();
var emtr3 = new Emitter();

emtr.on('greet', function() {
    console.log('somewhere someone said hello');
});

emtr.on('greet', function(){
    console.log('A greeting occured');
})

emtr2.on('check', function(){
    console.log('May I check your luggage');
})

emtr3.on('cheer',function(){
    console.log('CHEERING!');
})


emtr.emit('greet');

// Only if the type matches, then will it run the listener
// WORKS
emtr2.emit('check');
// DOESNT WORK
emtr2.emit('check2');

emtr3.emit('cheer');