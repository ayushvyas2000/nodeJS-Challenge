const axios=require('axios')
const asyncHandler=require('express-async-handler')
const getTodos=asyncHandler(async(req,res)=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
    if (!response.data) {
        res.status(404)
        throw new Error('No todos found')
    }
    const newTodo=response.data.map((todo)=>{
        const {id,title,completed}=todo
        return {
            id,
            title,
            completed
        }
    })
    res.status(200).json(newTodo)
})

module.exports={
    getTodos
}