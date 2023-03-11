const router = require('express').Router()
const User = require('../models/User')
const {registerValidation} = require('../validation')

router.post('/register', async (req, res) => {
    //validating before we make a new user
    const {error} = registerValidation(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    //creates new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    console.log(user) //we know user has all of the information, why isn't saving?

    try {
        const savedUser = await user.save();
        res.send(savedUser)
    }catch(err){
        res.status(400).send(err)
        console.log(err)
    }
})

module.exports = router