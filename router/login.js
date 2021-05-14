
const express = require('express')
const router = express.Router()

const mongoose=require("mongoose");
const { validate } = require('../model/Register');
const Login=mongoose.model("Register");
//
const Feedback=mongoose.model("FeedbackandCompailent");
//

router.post("/", async(req,res)=>{
    
    console.log(req.body.Email,
       req.body.Password);

    const  Validuser=await Login.find({
        Email:req.body.Email,
        Password:req.body.Password
    });
   // console.log(Validuser);
    if(Validuser!=''){
      //  res.send(200)
        res.json(Validuser);
    }else{
        res.send({
            'message':'invalid username and password'
        })
    }  
      //  res.send(200);
});

//


router.post("/feedback",async (req,res)=>{

          const feedback=new Feedback();  
          const feebackexit= await Feedback.findOne({id:req.body.id})
         
        if(feebackexit){
            const feedbackid=feebackexit._id;
          await  Feedback.findOneAndUpdate({_id:feedbackid},{
                $push:{
                    Feedbacks:req.body.Feedbacks
                }
            },{useFindAndModify: false,new: true})
        }else{
              feedback.id=req.body.id;
      feedback.Feedbacks=req.body.Feedbacks;
      await feedback.save();
         
        }
        
    console.log(req.body);
    res.send(200);
})
//
router.post("/complaint",async (req,res)=>{

          const complaint=new Feedback();
          const complaintexit= await Feedback.findOne({id:req.body.id})
        if(complaintexit){
            const complaintid=complaintexit._id;
          await  Feedback.findOneAndUpdate({_id:complaintid},{
                $push:{
                    Complaints:req.body.Complaints
                }
            },{useFindAndModify: false,new: true})
        }else{
            complaint.id=req.body.id;
            complaint.Complaints=req.body.Complaints;
           await complaint.save();
         
        }  
        
    console.log(req.body);  
    res.send(200);
})
//
module.exports=router;