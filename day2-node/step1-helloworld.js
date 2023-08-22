let message = "Hello World";
let user = "Vijay";
let company = "Sports Interactive";
let city = "Mumbai";
let saymessage = function(){
    return message;
}

// named exports
// module.exports.message = message;
// module.exports.user = user;
// module.exports.company = company;
// module.exports.city = city;

// console.log(message);

// module.exports = {
    //     message : message,
    //     user : user,
    //     company : company,
    //     city : city
    // }

module.exports = { message, user, company, city, saymessage }