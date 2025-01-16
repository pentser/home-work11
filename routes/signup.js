import express from "express";

const router=express.Router();

router.get('/',(req,res)=>{
   console.log(req.query);
   res.render('signup',{title:req.query.fullname})
})

export default router;