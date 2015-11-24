(function() {
	console.log("Instantiating store");
	var app = angular.module('store', []);

	var gems = [{
		name: 'Dodechedron',
		price: 2.95,
		description: 'This is a description',
		canPurchase: true,
		soldOut: false
	}, {
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'This is a description',
		canPurchase: false
	}];

	app.controller("StoreController", function() {
		this.products = gems;
	});

})();
