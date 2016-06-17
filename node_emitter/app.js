var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();


emtr.on(eventConfig.GREET, function() {
    console.log('somewhere someone said hello');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occured');
})



emtr.emit(eventConfig.GREET);

