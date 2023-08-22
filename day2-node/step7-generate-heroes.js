const fs = require("node:fs");
let fileContent = JSON.parse( fs.readFileSync("data/herolist.json","utf-8") );

let heronames = ["Ironman","Thor","Hulk","Black Widow","Dr Strange", "Black Panther", "Captain America"];
let herocities = ["New York","Mumbai","Pune","Bangalore", "Delhi"];
let count = 0;
let si = setInterval(function(){
    let hero = {
        title : heronames[Math.round( Math.random() * heronames.length ) - 1],
        power : Math.round( Math.random() * 10 ),
        city : herocities[Math.round( Math.random() * herocities.length ) - 1],
    };
    if(count <= 100){
        fileContent.heroeslist.push(hero);
        fs.writeFile("data/herolist.json",JSON.stringify(fileContent),"utf-8",function(){
            count++;
            console.log("hero added");
        })
    }else{
        clearInterval(si);
    };
},10);
