var pop = Popcorn("#video");

pop.code({
		start: 2,
		end: 5,
		onStart : function(options){
			$("#video").get(0).pause();
			displayCode("array");
		}
	}
);

pop.code({
	start: 6,
	end: 11,
	onStart : function(options){
		$("#video").get(0).pause();
		displayCode("ternary");

	}
}
);



function displayCode (key){
	if (key=="array")
		editor.setValue("//Write a for loop that print Hello World 10 times\n");
	else if (key=="ternary")
		editor.setValue("//Write a while loop that prints Hello World 10 times\n");
}