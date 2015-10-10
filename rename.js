function listr()
{
    if(localStorage['n']==0)
    {
        document.write("<br><br><div style='text-align:center'><h3>No notes found.<h3></div>");
    }
  for(i=1;i<=localStorage['n'];i++)
  {
    var ids="i"+i,idsb="b"+i,idsc="j"+i;
   document.write("<div style='text-align:center'>"+i+". "+localStorage["title"+i]+"   "+ "<button id='"+idsb+"' type='button' class='bt' onclick='rnote("+i+")'>"+" Rename"+"</button>"+"<br>"+"<p id="+ids+">"+" "+"</p>"+
                  "<p id="+idsc+">"+" "+"</p>"+"</div>");   
  }
}

function rnote(i)
{
  document.getElementById("i"+i).innerHTML= "<textarea id='tbody"+i+"'>"+localStorage['title'+i]+"</textarea>"; 
  document.getElementById("j"+i).innerHTML= "<button type='button' onclick='rn("+i+")'>Save</button><br><br>"  
}

function rn(i)
{
 localStorage['title'+i]= document.getElementById("tbody"+i).value;
  document.getElementById("i"+i).innerHTML="";  
  document.getElementById("j"+i).innerHTML="";  
    location.reload();
}