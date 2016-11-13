

// № 5 варіанту за списком групи
// Породжуючий    № Структурний № 	Поведінки 
// Factory method 2 Adapter     3  Strategy 5

// Factory method
// Дерево Дуб Тополя Ялинка


class Tree {
	constructor() {
		this.tree = TreeFactory.createTreeFn(type);
	}
}

class TreeFactory(type) {
	static createTreeFn() {
		if( type == 'owl') return new Owl();
		if( type == 'topol') return new Owl();
		if( type == 'firtree') return new FirTree();
	}
}

class Owl extends Tree {}
class Topol extends Tree {}
class FirTree extends Tree {}
