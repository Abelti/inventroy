const asyncHandler = require('express-async-handler');
const items = require('../models/item_model');

//add items

const addItems = asyncHandler(async (req, res) => {
    const { itemName, itemCode, itemQuantity, itemPrice} = req.body;

    const createItem = await items.create({
        itemName,
        itemCode,
        itemQuantity,
        itemPrice
    });

    res.status(200).json({
        success: true,
        createItem
    });
});

const getAllItems = asyncHandler(async (req, res) => {
    const allItems = await items.find();
    res.status(200).json({
        success: true,
        allItems
    });
});

module.exports= { addItems, getAllItems }