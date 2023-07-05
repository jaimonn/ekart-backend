// //import cart collection
// const carts=require('../models/cartSchema')

// //add to cart
// exports.addToCart =async(req,res)=>{
//     //get details from request
//     const{id,title,price,image,quantity}=req.body



//     //logic
//     try{
// const product=await carts.findOne({id})
// if (product) {
//    //product is in cart so increment quantity
//    product.quantity += 1
//    //update product total
//    product.grandTotal = product.price * product.quantity
//    //to update product grand total in mongodb
//    product.save()
//    //to add response back to client
//    req.status(200).json("product added succesfully")
// }
// else{
//     //product is not in collection
// //add product to cart
// const newProduct= new carts({id,title,price,image,quantity,grandTotal:price})
// //save new product
// await newProduct.save()
// //to send response 
// res.status(200).json('product added sucessfully')
// }

//     }
//     catch(error){
//         req.status(404).json(error)
//     }
// }
// //get cart
// exports.getCart=async (req,res)=>{
//     //get all products from the cart
//     try{
// const allcarts = await carts.find()
// res.status(200).json(allcarts)
//     }
//     catch(error){
// res.status(404).json(error)
//     }
// }




//import cart collection
const carts=require('../models/cartschema')
//add to cart
exports.addToCart=async(req,res)=>{
    //get product details from the request
    const {id,title,price,image,quantity,grandTotal}=req.body
    //logic
    try{
        //check if the product is in cart collection
        const product=await carts.findOne({id})
        if(product){
            //if the product already exists ,increment qty
            product.quantity+=1;
            //also update pricing
            product.grandTotal=product.price*product.quantity;
            //then save 
            product.save()
            //to send response to client
            res.status(200).json("Item Added Successfully")
        }
        else{
            //product not in cart 
            const newProduct=new carts({id,title,price,image,quantity,grandTotal:price})
            //save new product in cart
            await newProduct.save()
            //to send response to client
            res.status(200).json("Item Added Successfully")
        }
    }
    catch(error){
        res.status(404).json(error)
    }
}

//get  cart
exports.getCart=async(req,res)=>{
    //get all products from the cart
    try{
        //logic
        const allcarts= await carts.find()
        res.status(200).json(allcarts)

    }
    catch(error){
        res.status(404).json(error)
    }
}

//cart deletion

exports.removeCartItem=async(req,res)=>{

    const {id}=req.params
    //product remove from cart collecttion
    try{
const removecart =await carts.deleteOne({id})
if (removecart.deleteCount!=0) {
    const allcarts= await carts.find()
    res.status(200).json(allcarts)
}
else{
    res.status(404).json("item not found")
}
    }
    catch(error){
res.status(401).json(error)
    }
}
//cart increment
exports.incrementCart=async (req,res)=>{
    //get product id from req
    const{id}=req.params
    try{
//logic
//check product id in cart collection,if its exists then increment quantity
const product =await carts.findOne({id})
//if its exists incre quanti
if (product) {
    
    //update product quantity and grand total
    product.quantity+=1
    product.grandTotal=product.price*product.quantity
    //save changes in mongodb
    await product.save()
    //incre quantity,get all cart collection item and updating particular item count
    const allcarts= await carts.find()
    res.status(200).json(allcarts)
}
else{
    res.status(404).json("item not found")
}
 }
    catch(error){
       req.status(404).json(error) 
    }
}


exports.decrementCart=async(req,res)=>{
    //get product id from the request
    const{id}=req.params
    try{
        //logic
        //check product in cart collection
        const product=await carts.findOne({id})
        if(product.quantity==1){
            const removecart=await carts.deleteOne({id})
            const allcarts=await carts.find()
            res.status(200).json(allcarts)
        }
        else{
        //if it exists increment quantity
        if(product){
            //update product quatity and granf total(price)
            product.quantity-=1;
            product.grandTotal=product.price*product.quantity;
            //save changes in mongodb
            await product.save();
            //increment the qty ,get all cart collection item and updating in particular item count
            const allcarts= await carts.find()
            res.status(200).json(allcarts)
            
        }
        else{
            res.status(404).json("Item not found")
        }

    }
}
    catch(error){
        res.status(404).json(error)
    }
}