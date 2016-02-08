(function() {
	var data=[
		{Id:1, Name: "Passing"},
		{Id:2, Name: "Defense"}
		];

	var viewModel={
		tags: ko.observableArray(data),
		tagToAdd: ko.observable(""),
		selectedTag: ko.observable(null),

		addTag: function() {
			this.tags.push({Name: this.tagToAdd()});
			this.tagToAdd("");
		},
		/*deleteTag: function() {
			var itemToRemove=ko.dataFor(this);
			viewModel.tags.remove(itemToRemove);
		}*/

		selectTag: function() {
			console.log("inside selectTag");
			viewModel.selectedTag(this);
		}
	};

	$(document).on("click",".tag-delete", function() {
		var itemToRemove=ko.dataFor(this);
		viewModel.tags.remove(itemToRemove);
	});

	$(document).on("click", ".tag-edit", function() {
		$("#tagDialog").dialog(
			/*{
			buttons: {
				Save: function() {$(this).dialog("close");},
				Cancel: function() {$(this).dialog("close");}
			}
		}*/
		);
	});

	ko.applyBindings(viewModel);
	
})();