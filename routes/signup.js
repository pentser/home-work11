import express from "express";

const router=express.Router();

router.get('/',(req,res)=>{
   const {fullname} =req.query;
   res.render('signup',{title:fullname,fullname})
})

export default router;