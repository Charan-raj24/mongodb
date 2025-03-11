const express = require('express')
const router = express.Router()
const URL = process.env.DB_URI
const {MongoClient} = require('mongodb')

router.get('/',async(req,res)=>{
     try{
        let client = await MongoClient.connect("mongodb+srv://Charan:jOLTOxTTxFEcSYx0@cluster0.06xk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected");
        const db = await client.db("charan")
        const collection = await db.collection('mobiles')
        const mobiles = await collection.find({Brand:"Samsung"}).toArray()
        res.json(mobiles)

     }catch(err){
        console.error("error occured",err)
     }
})

module.exports = router