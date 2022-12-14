const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const reviewSchema = new mongoose.Schema(
    {
        bookId: {type:ObjectId, require:true, ref:'Books'},
        reviewedBy: {type:String, require:true, default: 'Guest'},
        reviewedAt: {type:Date, require:true},
        rating: {type:Number,require:true},
        review: {type:String},
        isDeleted: {type:Boolean, default: false},
      },
{ timestamps: true })
module.exports = mongoose.model('Reviews', reviewSchema)
