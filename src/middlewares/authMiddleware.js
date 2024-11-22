const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
        if(!token){
            return res.status(401).json({message: "Unauthorized"})
        }
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            console.log("Decoded User is :", req.user);
            next()
        }catch(err){
            return res.status(500).json({message: "Invalid Token"})
        }
    }
    else{
           return res.status(401).json({message: "Unauthorized"})
        }

}

module.exports = verifyToken