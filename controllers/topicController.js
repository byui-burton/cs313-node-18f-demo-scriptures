const topicModel = require("../models/topicModel.js");

function getTopicList(req, res) {
	// get the list of all topics
	console.log("Getting all topics...");

	topicModel.getAllTopics(function(error, results) {
		res.json(results);
	});
}

function getTopic(req, res) {
	// get a single topic by id

	// /topic?id=1
	var id = req.query.id;

	// /topic/xxxxxxxxx
	//var id = req.params.id;

	console.log("Getting topic with id:" + id);

	topicModel.getTopicById(id, function(error, results) {
		res.json(results);
	});
}

function postTopic(req, res) {
	var name = req.body.name;

	console.log("Creating a new topic with name: " + name);

	topicModel.insertNewTopic(name, function(error, results) {
		res.json(results);

	});
}

module.exports = {
	getTopicList: getTopicList,
	getTopic: getTopic,
	postTopic: postTopic
};


