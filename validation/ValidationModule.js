const validateUser = ( fullname, email, password, age, gender ) =>
{
    // Condition 1: Fullname must be at least 6 characters
    if ( fullname.length < 6 )
    {
        return "Fullname must be at least 6 characters long.";
    }

    // Condition 2: Email must be yahoo or gmail
    if ( !email.endsWith( "@yahoo.com" ) && !email.endsWith( "@gmail.com" ) )
    {
        return "Email must be a yahoo.com or gmail.com address.";
    }

    // Condition 3: Password must be at least 6 characters
    if ( password.length < 6 )
    {
        return "Password must be at least 6 characters long.";
    }

    // Condition 4: Age must be at least 18 years
    if ( age < 18 )
    {
        return "Age must be at least 18 years.";
    }

    // Condition 5: Gender must be "male" or "female"
    if ( gender !== "male" && gender !== "female" )
    {
        return "Gender must be either 'male' or 'female'.";
    }

    // Validation passed
    return "Validation successful!";
};

module.exports.validateUser = validateUser;
