const http = require("node:http");

let server = http.createServer(function(req, res){
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Welcome to your life</h1>
        <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
            <li>List Item 4</li>
            <li>List Item 5</li>
        </ul>
    </body>
    </html>
    `);
    res.end();
});

server.listen(1010, "localhost", function(error){
    error 
    ? console.log("Error ", error) 
    : console.log("server is now live on localhost:1010")
})
