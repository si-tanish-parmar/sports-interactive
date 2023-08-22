const fs = require("node:fs");
setInterval(function(){
/*
fs.writeFile("temp.txt","New Hero is created \n",{ encoding : "utf-8", flag : "a"}, 
    function(err){
        if(err){
            console.log("Error ", err)
        }
        else{
            console.log("File updated")
        }
    });
*/
fs.appendFile("temp.txt","New Hero is created \n",{
    encoding : "utf-8"
    }, function(err){
        if(err){
            console.log("Error ", err)
        }
        else{
            console.log("File updated")
        }
    });
}, 1000);
