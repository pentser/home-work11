import express from "express";

const router=express.Router();
router.get('/',(req,res)=>{
  const {userName,emailAddress}= req.body;
   res.render('home',{title:userName,userName,emailAddress})
})

export default router;