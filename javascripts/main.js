function clock(id)
	{
		document.getElementById(id).textContent=(new Date()).toLocaleString();
		setInterval("document.getElementById('"+id+"').textContent=(new Date()).toLocaleString()",1000);
	}


function zhuyerili()
	{
		var year=document.getElementById('year').value;
		var month=document.getElementById('month').value;
		appendRili(year,month,'nima');
	}

	function appendRili(year,month,ele) 
	{

		//获取天数和日期
		var tianshu=new Date(year,month,0).getDate();
		//var tianshu=31;
		console.log(tianshu);
		var xingqi=new Date(year,month-1,1).getDay();
		xingqi=(xingqi+6)%7;
		console.log(xingqi);
		//var xingqi=3;
		//获取行数
		var rows=1+Math.ceil((tianshu-(7-xingqi))/7);
		console.log(rows);
			var now=new Date();
			var nianfen=now.getFullYear();
			var yuefen=(now.getMonth())+1;
		    var riqi=now.getDate();//19

		   var year=document.getElementById('year').value;

		var month=document.getElementById('month').value;
		console.log(year,month);
		    	
		//var rows=5;
		var date=1;
		var table=document.createElement('table');
		var firstRow=document.createElement('tr');
		for(var ii=1;ii<8;ii++)
		{	
			var	tmpTd=document.createElement('td');
			tmpTd.textContent=ii;
			firstRow.appendChild(tmpTd);
		}
		table.appendChild(firstRow);
		for(var i=0;i<rows;i++)
		{
			var tmpTr=document.createElement('tr');
			for(var j=0;j<7;j++)
			{
				var tmpTd=document.createElement('td');
				if(!((i==0&&j<xingqi)||(date>tianshu)))
					{
						tmpTd.textContent=date;
						if (date==riqi&&yuefen==month&&nianfen==year){
							tmpTd.style.backgroundColor='#FAFAFA';
						}
						date++;
					}
					
						
					

				tmpTr.appendChild(tmpTd);

			}

			table.appendChild(tmpTr);


			
		}
		document.getElementById(ele).innerHTML='';
		document.getElementById(ele).appendChild(table);
	}
	
	