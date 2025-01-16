import express from "express";

const router=express.Router();
router.post('/',(req,res)=>{
  const {userName,emailAddress}= req.body;
   res.render('home',{title:userName,userName,emailAddress})
})

export default router;