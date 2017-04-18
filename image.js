var add = $("add");
//var delete = $("delete");

function addImage() {
	var url=document.getElementById('pic').value;
	var img=document.createElement("img"); 
	var div=document.getElementById("planning");
	img.addClassName('pictures'); 
	img.src=url;
	if(img.width >100)
	{
		img.width=100; 
	}
	if(img.height > 100)
	{
		img.height=100;
	} 
	div.appendChild(img); 
	return false; 
}
