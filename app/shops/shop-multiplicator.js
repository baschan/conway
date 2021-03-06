progress.shopsystem.gui.displayFragmentMultiplicatorStatistic = false;

shopsystem.shops['multiplicator'] = {
	values: {
		index: 0,
		fragmentMultiplicator: 1,
		fragmentMultiplicatorUpdateValue: 1
	},
	priority: 5,
	visible: false,
	display: function(){
		var output = "";
	
		if(shopsystem.shops['multiplicator'].visible && shopsystem.shops['multiplicator'].values.index < shopsystem.shops['multiplicator'].pricing.length){
			//check if button is payable
			if(shopsystem.currentFragments >= shopsystem.shops['multiplicator'].pricing[shopsystem.shops['multiplicator'].values.index]){
				buttonClass = "paybutton-active";
			} else {
				buttonClass = "paybutton";
			}
		
			//display html
			output += "<div>";
				output += "<div id=\"payFragmentMultiplicatorButton\" class=\""+ buttonClass +"\" onClick=\"shopsystem.buy('multiplicator');\">(5) Fragment Multiplicator "+ (shopsystem.shops['multiplicator'].values.index+1) +" - "+ shopsystem.shops['multiplicator'].pricing[shopsystem.shops['multiplicator'].values.index] +" <i class=\"fa fa-money\"></i>";
				output += "</div>";
			output += "</div>";
			output += "<div class=\"clearfix\"> </div>";
		}
		
		return output;
	},
	update: function(){
		//shop is activated
		if(shopsystem.shops['multiplicator'].visible){
			//enough money
			if(shopsystem.shops['multiplicator'].visible && shopsystem.currentFragments >= shopsystem.shops['multiplicator'].pricing[shopsystem.shops['multiplicator'].values.index]){
				//pay
				shopsystem.currentFragments = shopsystem.currentFragments - shopsystem.shops['multiplicator'].pricing[shopsystem.shops['multiplicator'].values.index];
				shopsystem.shops['multiplicator'].values.index++;
				
				shopsystem.shops['multiplicator'].values.fragmentMultiplicator += shopsystem.shops['multiplicator'].values.fragmentMultiplicatorUpdateValue;
				
				displayProgressMessage("Fragment Multiplicator "+ shopsystem.shops['multiplicator'].values.index +" Unlocked!");
				
				statistics.shopsystem.updatesBought++;
			}
		}
		
		displayScoreboardGUI();
	},
	pricing: [
		100,	//2
		250,
		500,	//4
		1000,
		2500,	//6
		5000,
		7500,	//8
		10000,
		15000	//10
	]
}