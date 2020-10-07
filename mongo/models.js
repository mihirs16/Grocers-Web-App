// package imports
const mongoose = require('mongoose');

// applicant model
var Schema = mongoose.Schema;
var memberModelSchema = new Schema ({
    _id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contact_no: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});
var memberModel = mongoose.model('MemberModel', memberModelSchema);

// export model
module.exports = memberModel;