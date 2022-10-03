const { uuid } = require('uuidv4');
var express = require('express');
var router = express.Router();

const {db} = require("../mongo")

router.get('/get-one-example', async function(req, res, next) {
	const blogPosts = await db().collection("posts").findOne({
		id: {
			$exists: true
		}
	})

	console.log(blogPosts)

  res.json({
		success: true,
		posts: blogPosts
	})
});

module.exports = router;
