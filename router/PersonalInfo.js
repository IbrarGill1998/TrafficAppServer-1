
const cons = require('consolidate');
const express = require('express')
const router = express.Router()

const mongoose=require("mongoose");

const User=mongoose.model("Register");
//
const multer=require('multer');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./userImage/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload=multer({storage:storage});


router.post("/",upload.single('userimage'), async(req,res)=>{
    
    console.log(req.file);
    console.log(req.body);
        
             const validuser= await User.findOne({_id:req.body.id}) 
            if(validuser){
                await  User.findOneAndUpdate(
                    {_id:req.body.id},
                   
                    {
                        
                        UserImage:req.file,
                        PersonalData:req.body
                    },
                    {returnNewDocument: true,useFindAndModify:false}
                )   

                res.send(200);
            }else{
                res.send(500);
            }  
});

//

//
module.exports=router;