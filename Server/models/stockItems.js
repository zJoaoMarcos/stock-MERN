const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    itemName: {
        type: String, 
        required: true,
    },
    itemType: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    stockMin: {
        type: Number,
        required: true,
    },
});

const stockItems = mongoose.model("stockItems", itemsSchema);
module.exports = stockItems;