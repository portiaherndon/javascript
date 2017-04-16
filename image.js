var add = $("add");
//var delete = $("delete");

function addImage() {
	var url=document.getElementById('pic').value;
	var img=document.createElement("img");
	var div=document.createElement('planning'); 
	img.src = url;
	//document.getElementById('planning').innerHTML=img.src;
	div.appendChild(img);
	document.getElementById('planning').appendChild(div);
		
}
