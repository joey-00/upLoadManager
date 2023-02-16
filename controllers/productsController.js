const {readJSON, writeJSON} = require('../data')

module.exports = {
    addOneImage : (req,res) => {
        return res.render('addOneImage')
    },
    storeOneImage : (req,res) => {
        const products = readJSON('productsOneImage.json');

        const newProduct = {
            id : products.length ? products[products.length -1].id +1 : 1,
            name : req.body.name,
            description : "lorem ipsum dolor amet sit",
            image : req.file ? req.file.filename : null,
        }

        products.push(newProduct);

        writeJSON('productsOneImage.json', products)

        return res.redirect('/')
    },
    detailOneImage : (req,res) => {
        const products = readJSON('productsOneImage.json');
        const product = products.find(product => product.id === +req.params.id)
        return res.render('detailOneImage',{
            ...product
        });
    },
    addMultipleImages : (req,res) => {
        return res.render('addMultipleImages')
    },
    storeMultipleImages : (req,res) => {

        const products = readJSON('productsMultipleImages.json');

        const newProduct = {
            id : products.length ? products[products.length -1].id +1 : 1,
            name : req.body.name,
            description : "lorem ipsum dolor amet sit",
            images : req.files.map(file => file.filename),
        };

        products.push(newProduct);

        writeJSON('productsMultipleImages.json', products);

        return res.redirect('/')
    },
    detailMultipleImages : (req,res) => {

        const products = readJSON('productsMultipleImages.json');
        const product = products.find(product => product.id === +req.params.id)
        return res.render('detailMultipleImages',{
            ...product
        });
    },
    addMainImage : (req,res) => {
        return res.render('addMainImage')
    },
    storeMainImage : (req,res) => {
        
        const products = readJSON('productsMainImage.json');

        const newProduct = {
            id : products.length ? products[products.length -1].id +1 : 1,
            name : req.body.name,
            description : "lorem ipsum dolor amet sit",
            mainImage : req.files && req.files.mainImage ? req.files.mainImage[0].filename : null,
            images : req.files && req.files.images ? req.files.images.map(file => file.filename) : [],
        };

        products.push(newProduct);

        writeJSON('productsMainImage.json', products);

        return res.redirect('/')
    },
    detailMainImage : (req,res) => {
        const products = readJSON('productsMainImage.json');
        const product = products.find(product => product.id === +req.params.id)

        return res.render('detailMainImage',{
            ...product
        })
    }
}