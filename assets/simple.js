function move_cursor()
{
	let id = null;
	const elem = document.getElementById("console_square");
	const firstParagraph = document.getElementById("paragrafo");
	let pos = 0;
	clearInterval(id);
	id = setInterval(frame, 100);
	function frame()
	{
		if (pos == 350)
		{
			clearInterval(id);
		} else {
			pos++;
			elem.style.left = pos + 'px';
			firstParagraph.textContent.charAt(pos-1);
		}
	}
}

