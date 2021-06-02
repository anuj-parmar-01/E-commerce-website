const express = require("express");
const bodyparser= require("body-parser");
const mongoose= require("mongoose")
const shortid= require("shortid");
const app = express();
app.use(bodyparser.json())
mongoose.connect("mongodb+srv://Anuj:Anuj123@cluster0.ntimk.mongodb.net/Users?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true })
const schema= new mongoose.Schema({
    _id:{type:String, default : shortid.generate} ,
    image:String,
    title:String,
    description:String,
    availableSizes:[String],
    price:Number

 
});   

const Product= mongoose.model("products",schema);

app.get("/api/products",async(req,res)=>{
    const product= await Product.find()
    res.send(product)

});   
app.post("/api/products",async(req,res)=>{
    const newProduct = new Product(req.body);
    const savedProduct= await newProduct.save()
    res.send(savedProduct);
});
app.delete("/api/products/:id",async (req,res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});
app.listen(8000);  