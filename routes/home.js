import express from "express";

const router=express.Router();
router.get('/',(req,res)=>{
   console.log(req.body);
   res.render('home',{title:"home page",user:req.body.userName})
})

export default router;