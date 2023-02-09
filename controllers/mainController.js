const { readJSON } = require("../data")

module.exports = {
    home : (req,res) => {
        let productsOneImage = readJSON('productsOneImage.json')
        return res.render('home',{
            productsOneImage
        })
    }
}