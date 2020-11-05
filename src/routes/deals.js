const express = require('express');

const { 
    createDeal,
    getDealsById,
    deleteDeal
} = require('../controllers/deals');
const router = express.Router();


router.get('/:id', getDealsById);
router.post('/', createDeal);
router.delete('/:id', deleteDeal);

module.exports = router;