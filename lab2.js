const Bacon = require('baconjs');
const stream = Bacon.Bus()
stream
	.map(i => i.toUpperCase())
	.onValue(w => console.log(w))

stream.push("Dima")
stream.push("Kate")