module.exports = {
    addOneImage : (req,res) => {
        return res.render('addOneImage')
    },
    storeOneImage : (req,res) => {
        return res.send(req.body)
    },
    detailOneImage : (req,res) => {
        return res.render('detailOneImage')
    }
}