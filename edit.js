function liste()
{
    if(localStorage['n']==0)
    {
        document.write("<br><br><div style='text-align:center'><h3>No notes found.<h3></div>");
    }
  for(i=1;i<=localStorage['n'];i++)
  {
    var ids="i"+i,idsb="b"+i,idsc="j"+i;
   document.write("<div style='text-align:center'>"+i+". "+localStorage["title"+i]+"   "+ "<button id='"+idsb+"' type='button' class='bt' onclick='enote("+i+")'>"+" Edit"+"</button>"+"<br>"+"<p id="+ids+">"+" "+"</p>"+
                  "<p id="+idsc+">"+" "+"</p>"+"</div>");   
  }
}

function enote(i)
{
  document.getElementById("i"+i).innerHTML= "<textarea id='tbody"+i+"'>"+localStorage['body'+i]+"</textarea>"; 
  document.getElementById("j"+i).innerHTML= "<button type='button' onclick='ed("+i+")'>Save</button><br><br>"  
}

function ed(i)
{
 localStorage['body'+i]= document.getElementById("tbody"+i).value;
  document.getElementById("i"+i).innerHTML="";  
  document.getElementById("j"+i).innerHTML="";  
}
