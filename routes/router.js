//import express

const express =require('express')

//import productcontroller

const productController= require('../controllers/productController')


//omport wislistcontroller
const wishlistController= require('../controllers/wishlistController')

//import cartcontroller

const cartController= require('../controllers/cartController')

//creating object for router class

const router=new express.Router()

//resolve client request 
//all api cals will be resolves

//get all products
router.get('/products/all-products',productController.getAllProducts)

//get particular product details

router.get('/products/viewproduct/:id',productController.viewProduct)


//add wishlist product details

router.post('/products/addtowishlist',wishlistController.addtowishlist)

//get wishlist product deatils

router.get('/products/getwishlist',wishlistController.getWishlist)

//delete from wishlist

router.delete('/products/deleteWishlist/:id',wishlistController.deletewishlist)


router.post('/products/addtocart',cartController.addToCart)

//export router
module.exports=router

//get cart
router.get('/products/getcart',cartController.getCart)

//remove from cart
router.delete('/products/removecart/:id',cartController.removeCartItem)
//cart increment
router.get('/products/increment/:id',cartController.incrementCart)
//cart decrement
router.get('/products/decrement/:id',cartController.decrementCart)