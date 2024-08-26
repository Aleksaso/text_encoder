function encryptText() {
	var text = document.getElementById("text").value;
	var textEncrypted = text
		.replace(/e/g, "enter")
		.replace(/i/g, "imes")
		.replace(/a/g, "ai")
		.replace(/o/g, "ober")
		.replace(/u/g, "ufat");

	showResult(textEncrypted, "Text Encrypted");
}

function decryptText() {
	var text = document.getElementById("text").value;
	var textDecrypted = text
		.replace(/enter/g, "e")
		.replace(/imes/g, "i")
		.replace(/ai/g, "a")
		.replace(/ober/g, "o")
		.replace(/ufat/g, "u");

	showResult(textDecrypted, "Decrypted Text");
}

function showResult(text, type) {
	document.getElementById("encryption-img").style.display = "none";
	var resultDiv = document.getElementById("resultado");
	resultDiv.style.display = "block";
	resultDiv.innerText = text;
	document.getElementById("copy-btn").style.display = "inline-block";
}

function copyText() {
	var resultDiv = document.getElementById("resultado");
	var text = resultDiv.innerText;
	navigator.clipboard.writeText(text).then(function() {
		alert("Text copied to clipboard!");
	},	function(err) {
		console.error("Error when copying text: ", err);
	});
}

function clean() {
	document.getElementById("text").value = "";
	var resultDiv = document.getElementById("resultado");
	resultDiv.innerText = "";
	resultDiv.style.display = "none";
	document.getElementById("encryption-img").style.display = "block";
	document.getElementById("copy-btn").style.display = "none";
}
