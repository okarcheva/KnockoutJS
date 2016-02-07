(function() {
	var data=[ {name: "Bob"}, {name: "Joe"}, {name:"John"}];

	var viewModel = {
		list:ko.observableArray(data),
		addItem: function() {
			this.list.push({name:"Steve"})
		},
		removeItem: function() {
			this.list.pop();
		}
	};
		
	ko.applyBindings(viewModel);
	
})();