const express = require('express');
const router = express.Router();

const {addOneImage,storeOneImage, detailOneImage, detailMultipleImages, addMultipleImages ,storeMultipleImages, addMultipleImages, storeMultipleImages, detailMultipleImages, addMainImage, storeMainImage, detailMainImage} = require('../controllers/productsController');

const {uploadOneImage} = require('../middlewares/upload')

const {uploadOnemage}  = require('../middlewares/upload');;

const {uploadProductImages} = require('../middlewares/upload')



/* /products */
router
  .get('/add-one-image',addOneImage)
  .post('/add-one-image',storeOneImage)
  .get('/detail-one-image',detailOneImage)

module.exports = router;
