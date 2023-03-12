const router = require('express').Router()
const User = require('../models/User')
const verify = require('./verifyToken')

router.get('/', verify,(req, res) => {
    res.send(req.user)
    //res.json({posts: {title: 'My first post', description: 'Random data you shouldn\'t access!'}})
})

module.exports = router