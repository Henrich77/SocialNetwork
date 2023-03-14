const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions')


// Schema to create a course model
const postSchema = new Schema(
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

const Post = model('post', postSchema);

module.exports = Post;
