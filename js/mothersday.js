var numOfPhotos = 10;
var currentPic = 0;


function hidePhotos() {


	for(var p = 1; p < numOfPhotos; p++)

	{
		var photoID = "image" + p;
		document.getElementById(photoID).style.display = "none";
	}


}

function doRightClick()
{
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "none";
	currentPic--;
	if(currentPic < 1)
	{
		currentPic= numOfPhotos-1;
	}
	photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "block";
}

function doLeftClick()
{
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "none";
	currentPic++;
	if(currentPic >= numOfPhotos)
	{
		currentPic=1;
	}
	photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "block";
}

hidePhotos();