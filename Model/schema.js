const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detail = new Schema({
    postname: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    Content: {
        type: String,
        required: true
    },
    postedby: {
        type: String,
        required: true
    },
    uid: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Post", detail);