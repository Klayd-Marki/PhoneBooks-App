const mongoose = require('mongoose');
const Phone = mongoose.model('Phone');

exports.getMainPage = (req, res)=> {
    Phone.find((error, items) => {
        if(!error){
            res.render('index.ejs', {phones: items});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.getAddPage = (req, res) => {
    Phone.find((error, items) => {
        if(!error){
            res.render('add.ejs', {phones: items});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.postnewContact = (req, res) => {
    let firstname = req.body.newContactName;
    let lastname = req.body.newContactLastName;
    let phonenumber = req.body.newContactNumber;
    let newContact = new Phone();
    newContact.phonenumber = phonenumber;
    newContact.firstname = firstname;
    newContact.lastname = lastname;

    newContact.save((error, response) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log("Failed to save data.");
        }
    });
}

exports.deleteContact = (req, res) => {
    const checkedItemId = req.body.delete;

    Phone.findByIdAndRemove(checkedItemId, (error) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log('Failed to remove an item.');
        }
    });
}