const express = require('express')

const router = express.Router()


router.post('/license',async(req,res)=>{
    console.log(req.body);
   
        res.send('license');
  
    
})
router.post('/vehicle',async(req,res)=>{
    console.log(req.body);
   
        res.send('vehicle');
  
    
})



module.exports=router;