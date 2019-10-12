const express = require('express');
const router = express.Router();
const Products = require("../model/Products");
const Purchased = require('../model/Purchased');
const connectDB = require('../model/connectDB');

let counter = 5;

connectDB.connect();
/*
    Get /getProducts
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
    Post /populateData
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
router.post('/scanQR', (req,res)=>{
    
})
router.post("/populateTransaction", (req,res)=>{
    let date = new Date();
    const newPurchased1 = new Purchased({
        pid: 1,
        name: "Clinique Liquid Facial Soap Mild",
        purchasedDate: date,
        expireDate: date.setMonth(date.getMonth() + 8)
    })

    const newPurchased2 = new Purchased({
        pid: 3,
        name: "Clinique Moisture Surge",
        purchasedDate: date,
        expireDate: date.setMonth(date.getMonth() + 8)
    })

    const newPurchased3 = new Purchased({
        pid: 4,
        name: "Prep + Prime Fix+",
        purchasedDate: date,
        expireDate: date.setMonth(date.getMonth() + 8)
    })

    newPurchased1.save((err, result)=>{
        if(err){
            res.status(500);
        }
    })

    newPurchased3.save((err, result)=>{
        if(err){
            res.status(500);  
        }
    })
    newPurchased2.save((err, result)=>{
        if(err){
            res.status(500);    
        }
    })

    res.status(200).json({big: "daddy"});
})


/*
    Get '/getByID'
    Get Product Info By Product PID
    req.body.pid
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

router.po

router.get('/transaction',(req,res)=>{
    Purchased.findOne({})
    .then((products) =>{
        if(products){
            if(product) res.status(200).json({data: result});
            else res.status(500);
        }
    })
    .catch((err)=>{
        res.status(500).json({Error: err});
    })
})
module.exports = router;