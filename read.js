

function list()
{
    if(localStorage['n']==0)
    {
        document.write("<br><br><div style='text-align:center'><h3>No notes found.<h3></div>");
    }
  for(i=1;i<=localStorage['n'];i++)
  {
    var ids="i"+i,idsb="b"+i;
   document.write("<div style='text-align:center'>"+i+". "+localStorage["title"+i]+"   "+"<button id='"+idsb+"' type='button' class='bt' onclick='rnote("+i+")'> Read</button><br><p id="+ids+" style='color:black;background-color:white;font-weight:bold'> </p></div>");   
  }
}

function rnote(i)
{
if (document.getElementById("b"+i).innerHTML=="Collapse")
    {
     document.getElementById("i"+i).innerHTML="";   
     document.getElementById("b"+i).innerHTML="Read"; 
    } 
else 
    {
    document.getElementById("i"+i).innerHTML=localStorage["body"+i];   
    document.getElementById("b"+i).innerHTML="Collapse"; 
    }
}
