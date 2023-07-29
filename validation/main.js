const { validateUser } = require( './ValidationModule' );

// Example usage
const fullname = "Eman Elsayed";
const email = "emy2192002@gmail.com";
const password = "emanelsayed2192002";
const age = 20;
const gender = "female";

const validationResult = validateUser( fullname, email, password, age, gender );
console.log( validationResult );
