const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/phoneDB" , {useNewUrlParser: true,useUnifiedTopology: true});
require("./phone");