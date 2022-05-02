const express=require('express')
require('dotenv').config()
const {errorHandler} =require('./middleware/errorMiddleware')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/todos',require('./routes/todos'))
app.use('/user',require('./routes/user'))
app.use(errorHandler)
const PORT=process.env.PORT||5000

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Todo API")
})

app.get('*',(req,res)=>{
    res.status(404)
    throw new Error('Page not found')
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port : ${PORT}`);
})