// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//output = {"name":"john","age":24,"city":"boca raton","arr":[1,2,3]}
/*console.log("BEGIN");

var me = {
  name: "Boya",
  age: 30,
  alive: true,
  talk: function(){console.log('hi');}
}
*/


var stringifyJSON = function(obj) {
	var funcOrUndef =  function(test) { 
		return ((typeof test === "function") || (typeof test === "undefined"));
	}
	if (!funcOrUndef(obj)){
		 if (typeof obj === "object" && obj !== null) {
		 	if (Array.isArray(obj) === false){												//stringify objects
		 		var empty = true;
				var str = '{';
			  for (var prop in obj) {
					if (!funcOrUndef(obj[prop])){
				  	var empty = false;
			 	 		str = str + '"' + prop + '":' + stringifyJSON(obj[prop]) + ',';	  
			  	}
				}
			if (empty){
					return "{}";
				}
				else
					return str.slice(0, str.length-1) + '}'; 
			}
			else {      																							//stringify arrays
				var str = "[";
				var empty = true;
					for (var i = 0; i < obj.length; i++){
						empty = false;
						if (!funcOrUndef(obj[i])){
							str = str+stringifyJSON(obj[i])+",";
						}
						else
							str += "null,";
					}
				if (!empty){
					return str.slice(0, str.length-1) + ']'; 
				}
				else
					return str+']';
			}
		}
		else if (obj ===null) {
			return "null";
		}
		else {
					switch (typeof obj){ 
				case "string": return '"' + obj +'"';	
				default: return obj.toString();
					}
		}
	}
}
//console.log(stringifyJSON(me));
