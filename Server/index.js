const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config()


const ItemModel = require('./models/stockItems')

app.use(express.json());
app.use(cors());

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.10gbm.mongodb.net/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
    }
);

app.post('/insert', async (req, res) => {
    const itemName = req.body.itemName;
    const itemType = req.body.itemType;

    const item = new ItemModel(
        {
            itemName: itemName,
            itemType: itemType,
        }
    );

    try {
        await item.save();
        res.send("Inserted Data");
    } catch (err) {
        console.log(err);
    }
});

app.get('/read', async (req, res) => {
    ItemModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result);

    })
});

app.listen(3001, () => {
    console.log("Server running on port 3001...");
});