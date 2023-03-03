const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions')


// Schema to create a course model
const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      maxlenght: 280,
    },
    created: {
      type: Date,
      default: Date.now(),
    },
    username: {

      type: String,
      required: true,

    }, 
  
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Comment = model('comment', commentSchema);

module.exports = Comment;
