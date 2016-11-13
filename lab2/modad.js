const fetch = require('node-fetch')
const Bacon = require('baconjs')

function getInPortuguese(word) {
  const apiKey =
    'AIzaSyB4DyRHIsNhogQXmH16YKbZfR-lTXrQpq0'
	const url =
    'https://www.googleapis.com' +
    '/language/translate/v2' +
  	'?key=' + apiKey +
    '&source=en' +
    '&target=pt' +
    '&q=' + encodeURIComponent(word)
  const promise = fetch(url)
 		.then(response => response.json())
	  .then(parsedResponse =>
    	parsedResponse
      	.data
        .translations[0]
        .translatedText
    )
  const stream = Bacon.fromPromise(promise)
  return stream
}

const stream = new Bacon.Bus()

stream
  .flatMap(word => getInPortuguese(word))
  .map(word => word.toUpperCase())
  .onValue(word => console.log(word))

stream.push('cat')
stream.push('meal')
stream.push('trumpet')