# December 5th, 2017
---------------------------------------------------------------------------------------------------------------------------------------------
## What we've learned
- Twit
- Making twitter bots
- Get() and Post()
- The keys (big number/letter codes)

## Still Don't Know
- Stream()
- How to set intervals
- How to apply to canvas

## Creative Ideas
- We can set up a bot for each computer running our program, so that everytime a new x,y coordinate is made, the bot 1 will tweet it out, and bots 2/3/4 will take the tweet and be able to read the coordinates.

# December 8th, 2017
---------------------------------------------------------------------------------------------------------------------------------------------
## What we've learned
- how to pass perameters in Post() and Get() 
- How to get the keys and tokens
- How to use twitter's dev options

## Still Don't Know
- Stream()
- How to set intervals
- How to apply to canvas

## Creative Ideas
- We can set up a bot for each computer running our program, so that everytime a new x,y coordinate is made, the bot 1 will tweet it out, and bots 2/3/4 will take the tweet and be able to read the coordinates.

## Code
//Bot Username: S2t645

var Twit = require('twit');

var T = new Twit({
	consumer_key:'yKNIoiFdxvFzZmqKmOOX36YcD'
, consumer_secret:'6l7qRMkNSYFwRfExJ6qOfsnzKANJApAo72yIipBprmkwNv1fxE'
, access_token:'938805392137641984-lijIGn3uZQTjab4xKIL6h4rJOeuzONY'
, access_token_secret:'WxbghmOQ1VSoNQhSMG6NNls94PLpEow6islHdMKjX8T0b'
})

console.log("Starting up");

/*T.get('search/tweets', { q: 'hello', count: 3 },  function (err, data, response) {
  console.log(data)
})*/

T.post('statuses/update', { status: 'HI THIS IS ME' }, function(err, data, response) {
  console.log(data)
})


# December 12th, 2017
---------------------------------------------------------------------------------------------------------------------------------------------

We can use some ideas from video 15.7 to send x, y coordinates back and forth between our bots.


# December 15th, 2017
---------------------------------------------------------------------------------------------------------------------------------------------
To send the coordinates in the tweet, we will have to convert from a string to a number. The code from this website could help us remove the hashtag and other parts of the tweet that aren't part of the coordinates.


https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript

