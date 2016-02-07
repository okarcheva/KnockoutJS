(function() {
var viewModel={
	name: ko.observable("bob"),
  	changeName: function(){
  	this.name("steve");
  	},
  	nameVisible: ko.observable(true)
};

viewModel.displayName = ko.computed(function(){
	return this.name() + " is" + (!this.nameVisible() ?" not":"")+ " visible";
	}, 
	viewModel);

ko.applyBindings(viewModel);
})();