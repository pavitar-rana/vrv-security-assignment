const { getUser } = require("../service/auth");

async function checkForAuthenticUser(req, res, next) {
    console.log("checkForAuthenticUser middleware called");

    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer "))
        return next();

    const userToken = authorizationHeader.split("Bearer ")[1];

    const user = await getUser(userToken);

    console.log("user is : ", user);

    if (!user) return res.send("user not found");

    req.user = user;
    next();
}

function redirectTo(roles) {
    return function (req, res, next) {
        if (!req.user)
            return res.send("You are not authorized to view this page");

        console.log(req.user);
        if (!roles.includes(req.user.role))
            return res.send("You are not authorized to view this page");
        next();
    };
}

module.exports = {
    checkForAuthenticUser,
    redirectTo,
};
