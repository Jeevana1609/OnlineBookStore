const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    reviewer: String,
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
});
module.exports = mongoose.model('Review', reviewSchema);
