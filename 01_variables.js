const accountId = "144553"
let accountEmail = "shivansh@email.com"
var accountPassward = "1234"
accountCity = "jaipur"
let accountstete;


// accountId= 2 "144554"                       //not allowed
// accountEmail = "tamanna@Email.com"         //allowed
// accountPassward = "321"                  //allowed
accountCity="saharnpur"                  //allowed


/*
prefer not to use var
becouse of issue in block scope and functional scope
*/

console.log(accountCity);

console.table([accountEmail,accountId,accountPassward,accountCity,accountstete]);

