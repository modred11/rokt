
// import pulls attributes out to the global scope,
//   allowing them to be accessed more easily
//   and creating risk of overlap between them and local identifiers

ImportFrom = function(that, list) {
	list.forEach( function(key) {
		window[key] = that[key];
	} );
};

//
//
//

(function() {

	//---------------------------------------------------------------------------
	// Math
	//---------------------------------------------------------------------------

	ImportFrom(Math, [
		"E",
		"LN10",
		"LN2",
		"LOG10E",
		"LOG2E",
		"PI",
		"SQRT1_2",
		"SQRT2",
		"abs",
		"acos",
		"acosh",
		"asin",
		"asinh",
		"atan",
		"atan2",
		"atanh",
		"cbrt",
		"ceil",
		"clz32",
		"cos",
		"cosh",
		"exp",
		"expm1",
		"floor",
		"fround",
		"hypot",
		"imul",
		"log",
		"log10",
		"log1p",
		"log2",
		"max",
		"min",
		"pow",
		"random",
		"round",
		"sign",
		"sin",
		"sinh",
		"sqrt",
		"tan",
		"tanh",
		"trunc"
	]);

})();
