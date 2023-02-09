const express = require('express');
const router = express.Router();

const {addOneImage,storeOneImage, detailOneImage} = require('../controllers/productsController');

const {uploadOneImage} = require('../middlewares/upload')



/* /products */
router
  .get('/add-one-image',addOneImage)
  .post('/add-one-image', uploadOneImage.single('image'), storeOneImage)
  .get('/detail-one-image',detailOneImage)

module.exports = router;
