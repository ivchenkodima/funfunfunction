

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
flowerAdapter.sayHi();

