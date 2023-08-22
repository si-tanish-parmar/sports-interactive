const os = require("node:os");

console.log("Architecture ",os.arch());
console.log("Total Memory in Bytes", os.totalmem());
console.log("Free Memory in Bytes",os.freemem());
console.log("Number of CPUs ", os.cpus().length);
console.log("Your Name on this machine ",os.userInfo().username);
console.log("Number of parallelism your system support ",os.availableParallelism());