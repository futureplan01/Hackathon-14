const express = require('express');
const router = express.Router();
const Products = require("../model/Products");
const connectDB = require('../model/connectDB');

/*
    Get All Products
*/
router.get("/getProducts",(req,res) =>{
    Products.find()
    .then((result)=>{
        
    })
    .catch(err =>{
        console.log("Something Went Wrong With Get Products");
    })
})

router.get("/populateData", (req,res)=>{
    console.log("hello")
    for(i = 0; i < 10; i++){
        let date = new Date();
        date = date.setMonth(date.getMonth()+8);
        const newProduct = new Products({
            pid: i,
            name: "Clinique",
            containerType: "C98",
            Ingredience: "",
            showUsers: "",
            exp: date,
        })

        newProduct.save()
        .catch((err)=>{
            console.log("Err is: " + err);
        })
    }
    res.status(200).send("Success");
})

/*
    Get All User Transactions
    Will Configure for Later purposes
*/

router.get("/getUserProducts",(req,res)=>{

})

module.exports = router;