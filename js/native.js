document.addEventListener("DOMContentLoaded",colaps);
	function colaps(){
	var colapse = document.querySelector("#button");
	colapse.addEventListener("click", 
	function(){
	document.querySelector("#touch-menu").classList.toggle("touch"); }
	)
	
		var btc = document.querySelector("#btc");
		var dash = document.querySelector("#dash");
		var doge = document.querySelector("#doge");
		var etc = document.querySelector("#etc");


		btc.addEventListener("click", btcClick);
		//dash.addEventListener("click",dashClick());
		//doge.addEventListener("click", dogeClick());
		//etc.addEventListener("click", etcClick());
	}

	function btcClick(){
 document.querySelector("#bitcoin-table").classList.toggle ("tab-show");
	
	}

