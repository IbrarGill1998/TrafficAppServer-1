const express = require('express')

const router = express.Router()

const mongoose=require("mongoose");
const Post=mongoose.model("Register");


router.get("/register",async (req,res)=>{
  
        const posts=await Post.find({})
        res.send(posts)
    
})

router.post("/register",async (req,res)=>{

    console.log(req.body)
    
       const post=new Post();

    post.Email=req.body.Email;
   post.Cnic=req.body.Cnic;
    post.Username=req.body.Username;
    post.Password=req.body.Password;
    post.Role=req.body.Role;

    await post.save(); 
          res.send(200);
         

         
 })
 /*
 router.get("/register/:postid",async (req,res)=>{
        
            const post=await Post.find({_id:req.params.postid});
            res.send(post);
 })

 router.put("/register/:postid",async (req,res)=>{

    
        const post=await Post.findByIdAndUpdate({
            _id:req.params.postid},
            req.body,{
                new:true,
                runValidators:true
        })
        res.send(post)
 })

 router.delete("/register/:postid",async (req,res)=>{

        const post= await Post.findByIdAndRemove({
            _id:req.params.postid
        });
        res.send(post);
})
*/









module.exports=router;