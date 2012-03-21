var pop = Popcorn("#video");

pop.code({
		start: 2,
		end: 5,
		onStart : function(options){
			displayCode("array");
		}
	}
);

pop.code({
	start: 6,
	end: 11,
	onStart : function(options){
		displayCode("ternary");
	}
}
);



function displayCode (key){
	if (key=="array")
		editor.setValue("var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];");
	else if (key=="ternary")
		editor.setValue("var c = a > b ? a : b");
}