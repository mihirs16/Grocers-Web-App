// package imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

// other imports
var Member = require('../mongo/models');

// router setup
router = express.Router();
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());
router.use(cors());


// GET all members in db
router.get('/', (req, res, next) => {
    Member.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});

// POST login by email (_id)
router.post('/login', (req, res, next) => {
    const user = req.body;
    Member.findOne({
        _id: user._id.toString()
    })
    .exec()
    .then(docs => {
        if (docs) {
            if (user.password == docs.password) {
                res.status(200).json({
                    success: true,
                    msg: "Login Successful.",
                    user: docs
                });
            } else {
                res.status(403).json({
                    success: false,
                    msg: "Wrong Password.",
                });
            }
        } else {
            res.status(404).json({
                success: false,
                msg: `${user._id} does not exist.`
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.json({
            error: err
        })
    })
});

// POST new member data to mongo
router.post('/register', (req, res, next) => {    
    const member = new Member(req.body);
    member.save().then((result) => {                             
        res.status(200).json({
            success: true,
            msg: 'Registration Successful'
        });
    })                                              
    .catch((err) => {
        if (err.name == "MongoError" && err.code == 11000) {
            console.log("Applicant Register No. already exists in DB: " + err.keyValue['_id']);
            res.status(409).json({
                success: false,
                msg: 'Username already exists.'
            });                                     
        } else {
            console.log(err);
            res.status(500).json({
                success: false,
                error: err
            });
        }
    })
});

// export router
module.exports = router;
