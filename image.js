//var add = $("add");
//var delete = $("delete");

function addImage() {
	var url=document.getElementById('pic').value;
	var img=document.createElement("img"); 
	var div=document.getElementById("planning"); 
	div.className="pictures"; 
	img.src=url; 
	//var pics = div.querySelectorAll(".pictures");
	var pics = div.childNodes;
	console.log('hi there');
	console.log("length of pics",pics.length);
	
	if(pics.length==1)
	{
		console.log("test");
		div.appendChild(img);
	}
	else
	{
		if(!search(pics,img.src))
		{
		
			//div.className="pictures"; 
			div.appendChild(img); 
		}
	}
	
	

	//console.log(pics);
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
	console.log("enters search",source1.length); 
	for(var i=0;i<=source1.length-1;i++)
	{
		if(source1[i].src == source2)
		{
			console.log(source1[i].src);
			console.log(source2);
			console.log('hello');
			return true;
		} 
	} 
	return false; 
}
