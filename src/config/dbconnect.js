const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_URL) 
            console.log(
               `DB CONNECTED` 
            )
        }catch(err){
            console.error(err)
            process.exit(1)
        }
}

module.exports = connectDB;