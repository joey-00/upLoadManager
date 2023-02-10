const express = require('express');
const router = express.Router();

const {addOneImage,storeOneImage, detailOneImage, detailMultipleImages, addMultipleImages ,storeMultipleImages} = require('../controllers/productsController');

const {uploadOneImage} = require('../middlewares/upload')

const {uploadOnemage}  = require('../middlewares/upload');


/* /products */
router
  .get('/add-one-image',addOneImage)
  .post('/add-one-image', uploadOneImage.single('image'),storeOneImage)
  .get('/detail-one-image/:id',detailOneImage)

  .get('/add-multiple-images',addMultipleImages)
  .post('/add-multiple-images',storeMultipleImages)
  .get('/add-multiple-images/:id',detailMultipleImages)

module.exports = router;
