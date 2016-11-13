var arr = [
	{name:'dima', age:23},
	{name:'olya', age:16},
	{name:'vasya', age:10}
];

//map
var map = arr.map(function(item) {
	return item.name +" "+ item.age;
})
// console.log(map);

//filter
var filter = arr.filter(function(item) {
	return item.name =='dima'
});
// console.log(filter);

//reduce
var reduce = arr.reduce(function(ageSum, item) {
	return ageSum + item.age;
},0)

console.log(reduce);

