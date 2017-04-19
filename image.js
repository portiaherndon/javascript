function addImage() {
	var url=document.getElementById('pic').value;
	var img=document.createElement("img"); 
	var div=document.getElementById("planning"); 
	div.className="pictures"; 
	img.src=url; 
	img.onclick=function() {urlFunction(this)}; 
	var pics = div.childNodes; 
	if(pics.length==1)
	{ 
		div.appendChild(img);
	}
	else
	{
		if(!search(pics,img.src))
		{
			div.appendChild(img); 
		}
	} 
	return false; 
}
function deleteImage()
{
	var url = document.getElementById('pic').value;
	var div = document.getElementById("planning");
	var pics = div.childNodes;
	if(search(pics,url))
	{
		var images = div.querySelectorAll('[src]'); 
		for(var img in images)
		{
			if(images[img].src == url)
			{
				div.removeChild(images[img]);
			}
		}		
	}
	return false;	
}

function search(source1,source2)
{ 
	for(var i=0;i<=source1.length-1;i++)
	{
		if(source1[i].src == source2)
		{
			return true;
		} 
	} 
	return false; 
}
function urlFunction(element)
{
	var url = element.src;
	var place = document.getElementById('pic');
	place.value = url;		
} 
