import express from 'express';

let tweets = [
	{
		id: '1',
		name: 'bob',
		userName: 'bob',
		text: 'when can I stop being in that boring life cycle?',
		createAt: new Date().toString(),
	},
	{
		id: '2',
		name: 'marina',
		userName: 'daniel',
		text: 'why do I have to implement that improvisd DB? wtf',
		createAt: new Date().toString(),
	},
	{
		id: '3',
		name: 'marina',
		userName: 'marina',
		text: "I don't know whether she will like it or not if I call her.",
		createAt: new Date().toString(),
	},
];

const tweetsRouter = express.Router();

// Get tweets
// Get tweets by userName (query)
tweetsRouter.get('/', (req, res, next) => {
	const { userName } = req.query;
	const result = userName
		? tweets.filter((tweet) => {
				return userName === tweet.userName;
		  })
		: tweets;

	return res.status(200).json(result);
});

// Get tweets by id (pamams)

tweetsRouter.get('/:id', (req, res, next) => {
	const { id } = req.params;
	const result = tweets.find((tweet) => {
		return id === tweet.id;
	});
	return res.status(200).json(result);
});

// Create tweets (Post) status(201)
tweetsRouter.post('/', (req, res, next) => {
	const { text } = req.body;
	const newTweet = {
		id: Date.now().toString(),
		userName: 'bob',
		name: 'bob',
		createAt: new Date().toString(),
		text,
	};
	tweets = [...tweets, newTweet];
	console.log(tweets);
	return res.sendStatus(201);
});

// Update tweets (Put) status(200)
tweetsRouter.put('/:id', (req, res, next) => {
	const { id } = req.params;
	const { text } = req.body;
	const tweet = tweets.find((tweet) => {
		return tweet.id === id;
	});
	tweet.text = text;
	return res.status(200).json(tweets);
});

// Delete tweets (Delete) status(204)
tweetsRouter.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	tweets = tweets.filter((tweet) => {
		return id !== tweet.id;
	});
	return res.status(204).json(tweets);
});

export default tweetsRouter;
