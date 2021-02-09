const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    description: {
        type: String
    }
});

const Phone = mongoose.model("Phone", phoneSchema);