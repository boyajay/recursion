var stringifyJSON = function(obj) {
	if ((typeof obj === 'number' && !isNaN(obj))
		|| typeof obj === 'boolean'
		)
	{
		return obj.toString();
	};
	if (obj === undefined || obj === null){
		return "null";
	}
	if (typeof obj === "string"){
		return '"' + obj + '"';
	}
	if (Array.isArray(obj)) {
		var arrStr = '[';
		for (var i = 0; i < obj.length; i++) {
			arrStr += stringifyJSON(obj[i]);
			arrStr += i < obj.length-1 ? ',' : '';
		}
		return arrStr+']';
	}
	if (typeof obj === 'object') {
		var objStr = '{';
		var empty = true;
		for (var i in obj) {
			if (typeof obj[i] != 'function' 
				&& typeof obj[i] != 'undefined')  {
				empty = false;
				objStr = objStr + '"' + i.toString() +'":' + stringifyJSON(obj[i]) + ',';
			};
		}
		if (!empty){
			return objStr.slice(0,objStr.length-1) + '}';
		} else{

			return '{}';
		}
	}	
};
