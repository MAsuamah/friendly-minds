const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');


router
  .route('/thoughts')
  .get(getAllThought)
  .get(getThoughtById)
  .post(addThought)
  .put(updateThought)
  .delete(removeThought)

router
  .route('/api/thoughts/:thoughtId/reactions')
  .posst(addReaction)
  .delete(removeReaction)
  

module.exports = router;