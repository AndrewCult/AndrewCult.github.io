function move_cursor()
{
	let time = null;
	const htmlText = document.getElementById('text');
	const cursor = document.getElementById('square');
	let dinamicText = htmlText.firstChild.data.split('');
	let textLength = dinamicText.length;
	htmlText.textContent = "";
	htmlText.style.visibility = "visible";
	let id = 0;
	let posCursor = 20;
	clearInterval(time);
	time = setInterval(loop, 1000);

	function loop()
	{
		if (id == textLength)
			console.log("finished");
		else 
		{
			if (dinamicText[id] != " ")
				posCursor += 10;
			else
				posCursor += 8;

			cursor.style.left = posCursor + "px";
			htmlText.textContent += dinamicText[id];
			console.log(id, cursor.style.left, dinamicText[id]);
			id++;
		}
	}
}
