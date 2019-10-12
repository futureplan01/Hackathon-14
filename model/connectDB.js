const mongoose = require('mongoose');
const db ='mongodb://hack-14:hack-14@ds333238.mlab.com:33238/el-products';

module.exports={
    connect : ()=>{
        mongoose.connect(db,{
            useNewUrlParser: true
        },(err)=>{
            if(err) console.log(err);
            else{
                console.log("Connection Established");
            }
        })
    }
}