const adminAuth = (req, res, next)=>{
    console.log("Admin Middleware is called");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        return res.send("You are not looking like Admin.Who are you tell me fast!!!")
    }
    else {
        next();
    }
}

module.exports = adminAuth;