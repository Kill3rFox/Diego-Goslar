//Variable establishment//
var i = 0;
var imagez = [];
var time = 3000;

//Array//
imagez[0] = "spc1.jpg";
imagez[1] = "tan1.jpg";
imagez[2] = "lea1.jpg";
imagez[3] = "iri1.jpg";
imagez[4] = "no1.jpg";

//Image change function//
function change()
{
	document.slide.src = imagez[i];
	
	if(i < imagez.length -1)
	{
		i++;
	}
	else
	{
		i = 0;
	}
	
	setTimeout("change()", time);
}

window.onload = change;
