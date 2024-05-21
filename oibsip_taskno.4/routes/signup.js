const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt=require('bcrypt');
const saltRounds=10;

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    let username = email;
    try {
        let user = await User.findOne({ username });
        if (user) {
            res.render('login', {
                msg: "User is Already Present"
            });
        }
        else {
            try{
                bcrypt.hash(password,saltRounds,async function(err,hash){
                    await User.create({
                        username,
                        password: hash
                    })
                    res.render('login', {
                        msg: "Signup Success"
                    });
                })
            }
            catch(err){
                res.send(err);
            } 
        }
    }
    catch (err) {
        res.send(err);
    }
}
);

module.exports = router;