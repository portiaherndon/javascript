/*addImage function adds the pic to the planning area.
It checks to make sure the image does not already exist. If it does
it does not add it. */
function addImage() {
	var url=document.getElementById('pic').value;
	var img=document.createElement("img"); 
	var div=document.getElementById("planning"); 
	div.className="pictures"; 
	img.className="pics";
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
		else 
			//$("error").innerHTML = "This image already exists";	
			alert("This image already exists");
			
	} 
	return false; 
}
/*This function deletes the image requested by the user. If the image does exist
it shoots an error message to the user to let them know*/
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
	else
	{
		//$("error").innerHTML = "This image does not exist";
		alert("This image does not exist");
		setTimeout(fade(),5000);	
	}
	return false;	
}
/*the search function is used by addImage and deleteImage to check for the existence
of the image requested. If the image is found in the planning area, it returns true.
if not, it returns false. */
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
/*this function gets the src of the image when clicked and places it into the textbox*/
function urlFunction(element)
{
	var url = element.src;
	var place = document.getElementById('pic');
	place.value = url;		
} 
