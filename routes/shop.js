const express = require('express');
const path = require('path');  

const router = express.Router();
const admindata = require('./admin');    

router.get('/',(req, res, next)=>{    
    //console.log("basic  page");        
   // res.send('<h1>This is Basic  Page </h1>'); 
  //  console.log(admindata.product);      
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));  
    const products = admindata.product;     
    res.render('shop',{doctittle:'shop',prods : products,path:'/',hasproduct:products.length > 0, shopclass:true,productcss:true});              
    });          


module.exports = router; 