function listd()
{
    if(localStorage['n']==0)
    {
        document.write("<br><br><div style='text-align:center'><h3>No notes found.<h3></div>");
    }
    
    
  for(i=1;i<=localStorage['n'];i++)
  {
    var ids="i"+i,idsb="b"+i,idsc="j"+i;
   document.write("<div style='text-align:center'>"+i+". "+localStorage["title"+i]+"   "+ "<button id='"+idsb+"' type='button' class='bt' onclick='dnote("+i+")'>"+" Delete"+"</button>"+"<br>"+"<p id="+ids+">"+" "+"</p>"+
                  "<p id="+idsc+">"+" "+"</p>"+"</div>");   
  }
}

function dnote(i)
{
  for(k=i;k<localStorage['n'];k++)
  {
   localStorage["title"+k]=localStorage["title"+(k+1)];   
   localStorage["body"+k]=localStorage["body"+(k+1)];   
  }
localStorage['n']--;
    location.reload();
}

