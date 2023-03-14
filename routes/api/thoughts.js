const router = require('express').Router();
const {
  getPost,
  getSinglePost,
  post,
  updatePost,
  deletePost,
} = require('../../controllers/PostController.js');

// /api/courses
router.route('/').get(getCourses).post(createCourse);

// /api/courses/:courseId
router
  .route('/:postId')
  .get(getSinglePost)
  .put(updatePost)
  .delete(deletePost);

module.exports = router;
