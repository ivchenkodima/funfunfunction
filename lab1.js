


// № 5 варіанту за списком групи
// Породжуючий    № Структурний № 	Поведінки 
// Factory method 2 Adapter     3  Strategy 5

// Factory method
// Дерево Дуб Тополя Ялинка

class Tree {
	constructor(type) {
		this.tree = TreeFactory.createTreeFn(type);
	}
}

class TreeFactory {
	static createTreeFn(type) {
		if( type == 'owl') return new Owl();
		if( type == 'topol') return new Owl();
		if( type == 'firtree') return new FirTree();
	}
}

class Owl extends Tree {}
class Topol extends Tree {}
class FirTree extends Tree {}

var owl = new Tree('owl');
// console.log(owl);

// №
// Абстракція Реалізація
// 3 Квітка Троянда
class Flower {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		console.log("I'm nornal flower")
	}
}
class Rose {
	sayHi() {
		[1,2,3,4,5].map(function () {
			console.log("I'm beautiful flower, ROSE!")	
		})
	}	
}
class FlowerAdapter {
	constructor(flower) {
		this.flower = flower;
	}
	sayHi() {		
		this.flower.sayHi();
	}
}
var flower = new Flower();
var rose = new Rose();
var flowerAdapter = new FlowerAdapter(rose);
// flowerAdapter.sayHi();


// Strategy
// № Дія      Вид алгоритму Алгоритм 1 Алгоритм  2 Алгоритм 
// 5 DataSort Sort          Linear     Selection Ternary

class Sort {
	exec() {
		throw new Error('Method should be redefined in extending class')
	}
}

class LinearSort extends Sort{
	exec(data) {}
}

class SelectionSort extends Sort{
	exec(data) {}
}
class TernarySort extends Sort{
	exec(data) {}
}
class DataSort {
	constructor(strategy) {
		this.strategy = strategy;
	}
	sort (data) {
		return this.strategy.exec(data);
	}
};

var strategyExample = function() {
	var dataSortLinear = new DataSort(new LinearSort());
	var dataSortTernary = new DataSort(new TernarySort());
	var dataSortSelection = new DataSort(new SelectionSort());

	var dataBlunk = new Array(1,2,3,4,5,6,7,7,8,9,0,233,43,4543,534,534,5,46,56);
	data = dataBlunk.map(function(i) {
		return Math.floor(Math.random() % 100 * 40);
	})
	console.log(data);
	dataSortLinear.sort(data);
	dataSortTernary.sort(data);
	dataSortSelection.sort(data);
}
strategyExample();




