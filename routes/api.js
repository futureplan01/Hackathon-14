const express = require('express');
const router = express.Router();
const Products = require("../model/Products");
const connectDB = require('../model/connectDB');

let counter = 5;

connectDB.connect();
/*
    Get All Products
*/
router.get("/getProducts",(req,res) =>{
    Products.find({})
    .then((result)=>{
        res.status(201).json({data: result});
    })
    .catch(err =>{
        console.log("Something Went Wrong With Get Products");
    })
})

/*
    Insert Products
*/
router.post("/populateData", (req,res)=>{
        
        let date = new Date();
        date = date.setMonth(date.getMonth()+8);
        const newProduct = new Products({
            pid: counter,
            name: "Bye Bye Under Eye Full Coverage Anti-Aging",
            containerType: "C98",
            Ingredience: "Caprylic / Capric Triglyceride, Bis - Diglyceryl Polyacyladiapate-2, VP / Hexadecene Copolymer, Cetyl Alcohol, Silica Dimethyl Silylate, Ozokerite, Phenoxyethanol, Aqua (Water, Eau), Ascorbyl Palmitate, Tocopherol, Tocopherylacetate, Magnesium Ascorbyl Phosphate, Cholesteryl Nonanoate, Cholesteryl Oleyl Carbonate, Cholesteryl Chloride, Chrysin, Glycerin, Hydrolyzed Collagen, N-Hydroxysuccinimide, Niacinamide, Palmitoyl Oligopeptide, Palmitoyl Tetrapeptide-7, Retinyl Palmitate, Sodium Hyaluronate, Stearth-20. May Contain: Titanium Dioxide (CI 77891), Iron Oxides (CI 77492, CI 77491, CI 77499).",
            showUsers: "Sets Makeup and refreshes skin, Improves wear of makeup for 12 hours, Provides allover immediate hydration, Dermatologist tested, Ophthalmologist tested, Non-acnegenic",
            exp: date,
        })

        newProduct.save((err, result)=>{
            if(err) res.status(401).json({Error: err});
            else res.status(200).json("Works");
        });

        counter++;
})


/*
    Get Product Info By Product PID
*/

router.post("/getByID",(req,res)=>{
    Products.findOne({
        pid : req.body.pid
    })
    .then((products)=>{
        if(users){
            res.status(200).json({
                Product: products
            });
        }else{
            res.status(404).json({
                Error: "Product ID is not there"
            })
        }
    })
})

module.exports = router;