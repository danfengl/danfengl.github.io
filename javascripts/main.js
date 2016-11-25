function clock(id)
	{
		document.getElementById(id).textContent=(new Date()).toLocaleString();
		setInterval("document.getElementById('"+id+"').textContent=(new Date()).toLocaleString()",1000);
	}