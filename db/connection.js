
//import mongoose
const mongoose= require('mongoose')

//to acess connection string

const db= process.env.DATABASE

mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>{
    console.log('database connected successfully');
}).catch((error)=>{
    console.log(error);
})