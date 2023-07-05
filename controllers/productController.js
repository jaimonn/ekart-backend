
//import product collection

const products= require('../models/productSchema')

//logic to resolve c;lient req

//get all products

exports.getAllProducts= async (req, res)=>{
    try{
        //get allproduct from product collection in mongodb
        const allproducts= await products.find()
        res.status(200).json(allproducts)



    }
    catch(error){
        res.status(401).json(error)

    }
}

//get particular product from
exports.viewProduct =async (req,res)=>{
    //get productid from request
    const id=req.params.id
try{
    //check id in mongodb
    const product=await products.findOne({id})
    if(product){
        res.status(200).json(product)
    }
    else{
        res.status(404).json("product not found")
    }

}

catch(error){
res.status(400).json(error)
}

}