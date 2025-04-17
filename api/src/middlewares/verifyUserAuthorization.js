const AppError = require("../utils/AppError")

// roleToVerify = admin ou customer

//trabalhando c mais grupos['admin','customer','sale'].includes['sale']

function verifyUserAuthorization(roleToVerify){
    return (request,response,next)=>{

       const{ role }= request.user

       if(!roleToVerify.includes(role)){
        throw new AppError("Unathorized",401);

       }

       return next();

    }
}

module.exports= verifyUserAuthorization;