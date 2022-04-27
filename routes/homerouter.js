const express = require ("express")
const homerouter = express.Router()


homerouter.get("/", (req,res) =>{
    res.status(200).json({msg:"Welcome to the Flowers homepage"})
})

module.exports= homerouter