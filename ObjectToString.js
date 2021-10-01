export function toString(b){

	let c = Object.keys(b).map(e =>{

		if(b[e] instanceof Array){
			return `${e}:[${b[e]}]` 
		}

		if(b[e] instanceof Object && typeof b[e] !== "function"){

			return `${e}:${toString(b[e])}`

		}

		return `${e}:${b[e]}`

	});
	
	let g = "{";
	
	for(let x in c){

	    if(parseInt(x) === c.length-1){
	        
	        g+= c[x]+"}"
	        
	    }else{
	    
	        g+= c[x]+","
	    }
	}

	if(g === "{") return "{}"

	return g;

}
