const EventEmitter = require("node:events").EventEmitter;
let si = new EventEmitter();
let count = 0;
let cricketHandler = function(evt){
    console.log("cricket event happened", evt);
};
si.addListener("cricket", cricketHandler);
let interval = setInterval(function(){
    count++;
    console.log("interval triggered", count);
    if(count <= 5){
        si.emit("cricket", "cricket is a sport");
    }else{
        si.removeListener("cricket", cricketHandler);
        clearInterval(interval);
    }
},1000);
