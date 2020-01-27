const express = require("express");
const router = express.Router();

const Winner = require("../models/Winner");

//all winners
router.get('/', async (req, res, next) => {
    try {
        const listWinners = await Winner.find();
        res.status(200).json(listWinners);
    } catch (error) {
        next(error);
    }
});

// Create new winner
router.post('/addWinner', async (req, res, next) => {
    try {
        console.log('hola')
        const newWinner = req.body;
        console.log(newWinner)
        const createdWinner = await Winner.create(newWinner);
        res.status(200).json(createdWinner);
    } catch (error) {
        next(error);
    }
});




module.exports = router;