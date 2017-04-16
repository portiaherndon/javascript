var add = $("add");
//var delete = $("delete");

window.onload = function addImage() {
	var url=document.getElementById('pic').value;
	var img=document.createElement("img");
	var div=document.createElement('planning'); 
	img.src = url;
	
	div.appendChild(img);
	document.getElementById('planning').appendChild(div);
		
}
