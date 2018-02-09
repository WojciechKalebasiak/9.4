function drawTree (h) {
	for(var i = 0; i<h ; i++) {
		var star = '';
		var space = '';
		for (var j = h-i; j>=0; j--) {
			space+=' ';
		}
		for(var j=0; j<=i; j++) {
			if(j>=1) {
				star+='**';
			}
			else {
				star='*';
			}

		}
		console.log(space + star);
	}
}
drawTree(15);