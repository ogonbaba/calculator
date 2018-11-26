function slogit() {
	var num1 num2 result;
	num1 = document.getElementById('one').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('two').value;
	num2 = parseInt(num2);
	result = num1 + num2;
	document.getElementById('re').innerHTML = result;
}function vichest() {
	var num1 num2 result;
	num1 = document.getElementById('one').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('two').value;
	num2 = parseInt(num2);
	result = num1 - num2;
	document.getElementById('re').innerHTML = result;
}function umnogit() {
	var num1 num2 result;
	num1 = document.getElementById('one').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('two').value;
	num2 = parseInt(num2);
	result = num1 * num2;
	document.getElementById('re').innerHTML = result;
}function razdelit() {
	var num1 num2 result;
	num1 = document.getElementById('one').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('two').value;
	num2 = parseInt(num2);
	result = num1 / num2;
	document.getElementById('re').innerHTML = result;
}