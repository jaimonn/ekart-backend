///import mongoose

const mongoose= require('mongoose')

//define scheme for wishlist collection

const wishlistSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
        

    },
    price:{
        type:Number,
        required:true,
        

    },
   
    image:{
        type:String,
        required:true,
        

    },
   
})

//create a model to store wishlist

const wishlists= new mongoose.model('wishlists',wishlistSchema)

//export the model

module.exports=wishlists