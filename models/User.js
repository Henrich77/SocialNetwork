const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

// Schema to create Student model
const userSchema = new Schema(
  {
      username: {
      type: String,
      required: true,
      max_length: 50,
      unique: true
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comments',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('user', userSchema);

module.exports = Student;
