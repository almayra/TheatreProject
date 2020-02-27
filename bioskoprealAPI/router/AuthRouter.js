const express=require('express')
const {AuthController}=require('./../controller')

const router=express.Router()

router.get('/authlog/:id',AuthController.Authlogin)
router.get('/authlog',AuthController.Authlogin)
router.post('/register',AuthController.Register)
router.put('/verified',AuthController.verified)


module.exports=router