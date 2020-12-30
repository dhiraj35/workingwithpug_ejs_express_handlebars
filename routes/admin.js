const express = require('express');  
const path = require('path');


const router = express.Router();  
const product = [];

router.get('/product',(req ,res, next)=>{         
   // res.send('<form method="POST" action="/admin/saveproduct"><input type="text" name="product"/><button type="submit">Add Product</button> </form>');  
    //res.render('addproduct');  
   // res.sendFile(path.join(__dirname,'../','views','addproduct.html')); 
   res.render('addproduct',{doctittle:'Add Product',path:'/admin/product',productclass:true,formcss:true,productcss:true});                   
    });   
    
    router.post('/saveproduct',(req ,res, next)=>{     
      //  console.log({'title':req.body.title}); 
      product.push({title:req.body.title});             
     res.redirect('/');                
    });         

//module.exports = router;   
//module.exports = product;     
exports.router = router;  
exports.product = product;         