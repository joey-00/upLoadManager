const { readJSON } = require("../data")

module.exports = {
    home : (req,res) => {
        let productsOneImage = readJSON('productsOneImage.json');
        let productsMultipleImages = readJSON('productsMultipleImages.json')

        return res.render('home',{
            productsOneImage,
            productsMultipleImages
        })
    }
}