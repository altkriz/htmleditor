
var j=0;
//Function for live Rendering
function update(i) {
	if(i==0){
	let htmlCode=document.getElementById("htmlCode").value;
	let cssCode=document.getElementById("cssCode").value;
	let javascriptCode=document.getElementById("javascriptCode").value;
	let text=htmlCode+"<style>"+cssCode+"</style>"+"<scri"+"pt>"+javascriptCode+"</scri"+"pt>";
	let iframe=document.getElementById('viewer').contentWindow.document;
	iframe.open();
	iframe.write(text);
	iframe.close();
	}

	else if(i==1){
		
		let htmlCode=document.getElementById("htmlCode").value;
		let html=htmlCode.slice(0,htmlCode.length);
		document.getElementById("htmlCode").value=html;
		j=1;

	}
	
}

//Auto Tag Closing functionality
const closeChars = new Map([
	['{', '}'],
	['[', ']'],
	['(', ')'],
	['<','>'],
	['"','"'],
	["'","'"]
	
  ]);


//Handling Html Code Auto Closing	  
htmlCode=document.getElementById('htmlCode');
htmlCode.addEventListener('input', function (e) {
	if(j!=1){
		const pos = e.target.selectionStart;
		const val = [...e.target.value];
		const char = val.slice(pos-1, pos)[0];
		const closeChar = closeChars.get(char);
		if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
		}
	}
	j=0;
});

//Handling CSS Code Auto Closing
cssCode=document.getElementById('cssCode');
cssCode.addEventListener('input', function (e) {
	if(j!=1){
		const pos = e.target.selectionStart;
		const val = [...e.target.value];
		const char = val.slice(pos-1, pos)[0];
		const closeChar = closeChars.get(char);
		if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
		}
	}	
	j=0;
});

//Handling Javascript Code Auto Closing
javascriptCode=document.getElementById('javascriptCode');
javascriptCode.addEventListener('input', function (e) {
	if(j!=1){
	  const pos = e.target.selectionStart;
	  const val = [...e.target.value];
	  
	  const char = val.slice(pos-1, pos)[0];
	  const closeChar = closeChars.get(char);
	  
	  if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
	  }
	}
	j=0;
});

 

Split([".container", ".iframe-container"]);


//Function for saving thecode as file in local system

