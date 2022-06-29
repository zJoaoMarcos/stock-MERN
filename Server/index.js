const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()


const ItemsModel = require('./models/stockItems')

app.use(express.json())

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.10gbm.mongodb.net/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
    }
);

app.get('/', async (req, res) => {
    const item = new ItemsModel(
        {
            itemName: "Ramal",
            itemType: "Periférico",
            stock: "21",
            stockMin: "10"
        }
    );

    try {
        await item.save();
        res.send("Inserted Data");
    } catch (err) {
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001...");
});