const express=require('express')
const router=express.Router()
const {getUserInfo} =require('../controllers/user')
router.get('/:id',getUserInfo)
module.exports=router