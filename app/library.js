var app = {
computeAverage: function(num1, num2, num3){
	return (num1+num2+num3)/3;
},


computeFactorial: function(value){

	if (value === 0){
		return 1
	}

	return value * app.computeFactorial(value-1)
},

convertTempCtoF: function(c){
	farenheight = c *(9/5)+32;
	return farenheight;
},

convertTempFtoC: function(f){
	celcius = (f - 32)*5/9;
	return celcius;
}
}
module.exports = app