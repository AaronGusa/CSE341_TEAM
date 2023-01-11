const mongodb = require('../db/dbConnect');

const getDb = async (req, res, next) => {
    const result = await mongodb.getDb().db('341_contacts').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists); 
    });
}

module.exports = { getDb };