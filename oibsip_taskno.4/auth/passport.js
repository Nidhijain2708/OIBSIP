const passport = require('passport');
const User = require('../models/users');
const LocalStrategy = require('passport-local');
const bcrypt=require('bcrypt');
const saltRounds = 10;
const FacebookStrategy=require('passport-facebook');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async function (email, password, done) {
        // console.log("Here", email, password);
        try{
            let user = await User.findOne({ username: email });
            if (!user) { return done(null, false); }
            bcrypt.compare(password,user.password).then(function(err,result){
                if(result==false) return done(null,false);
                return done(null,user);
            })
        }
        catch(err){
            return done(err,false);
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
        .then((user) => {
            done(null, user);
        })
        .catch(err => {
            done(err, false);
        })

});

module.exports = passport;