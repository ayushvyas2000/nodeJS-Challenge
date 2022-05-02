const axios=require('axios')
const asyncHandler=require('express-async-handler')

const getUserInfo=asyncHandler(async(req,res)=>{
    const {id} = req.params
    const userResponse=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    const todoResponse=await axios.get('https://jsonplaceholder.typicode.com/todos')
    const newTodo=todoResponse.data.filter((todo)=>{
        const {userId}=todo
        return id==userId
    })
    res.status(200).json({
        ...userResponse.data,
        todos:newTodo
    })
})

module.exports={
    getUserInfo
}