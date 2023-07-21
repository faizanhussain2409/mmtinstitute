const express = require("express");
const app = express();
const path = require ("path");
const mongoose = require("mongoose")
require("./db/conn");
const User = require("../src/models/use")


const port = process.env.PORT || 5000;
const staticpath = path.join(__dirname,"../public");
app.use(express.json());

app.use(express.urlencoded({extended:false}));



app.use(express.static(staticpath));
//routing

app.get("/",(req,res)=>{  
    res.send("this is backend");

})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.post("/contact",async(req,res)=>{
    try {
        console.log(req.body)
        const userData = new User({
            _id: new mongoose.Types.ObjectId(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            comments: req.body.comments
        })
        await userData.save().then(result => {
            console.log(result, "Data saved successfully.")
            res.status(200).json({
                success: true,
                message: "Your details has been created"
            })
        }).catch(err => {
            console.log("Error while saving data", err.message);
            res.status(200).json({
                success: false,
                message: "Error while saving data"
            })
        });    
      }
    catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});
        

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})