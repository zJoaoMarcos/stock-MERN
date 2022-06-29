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
});

const stockItems = mongoose.model("items", itemsSchema);
module.exports = stockItems;