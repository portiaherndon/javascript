var add = $("add");
//var delete = $("delete");

function addImage() {
	var url=document.getElementById('pic').value;
	var img=document.createElement("img"); 
	var div=document.getElementById("planning"); 
	img.src=url;
	if(img.width > 500)
	{
		img.width=500; 
	}
	if(img.height > 500)
	{
		img.height=500;
	}
	//document.getElementById("planning").innerHTML=img.src; 
	div.appendChild(img);
	return false; 
}
