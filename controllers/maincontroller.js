const mongoose = require("mongoose");
// const Phone = require('../models/PhoneFromFile');
const Phone = mongoose.model("Phone");

exports.getMainPage = (req, res)=> {

    
    Phone.find((error,phones)=>{
        if(!error){
           res.render('index.ejs', { phoneItems : phones});  
        }else{
            console.log("Failed to retrieve data.");
        }
    });
    
};


exports.postnewPhone= (req, res) => {
    let item = req.body.newPhone;
    let newPhone = new Phone();
    newPhone.description = item;

    newPhone.save((error, respones) => {
        if(!error){
            res.redirect("/");
        }else{
            console.log("Failed to save data.");
        }
    });
}

exports.deletePhone = (req,res)=>{
    const checkedItemId = req.body.checkbox;
    
    Phone.findByIdAndRemove(checkedItemId, (error)=>{
        if(!error){
            res.redirect('/');
        }else{
            console.log("Failed to remove an item.");
        }
    });
} 
