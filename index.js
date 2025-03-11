const express = require("express")
const app = express()
 require('dotenv').config()
 let port  = process.env.PORT || 3006
 app.use('/xyz',require('./routes/sample'))
//  app.use('/abc',require('./routes/ FetchUsers'))
app.listen(port,()=>{
    console.log("Server is loading",port);    
})