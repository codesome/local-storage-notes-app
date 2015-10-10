if(!localStorage['n'])
{
 localStorage['n']=0;   
}


function nsubmit()
{
    if(document.getElementById("name").value=="")
    {
     alert("Title cannot be empty!");   
    }
        
    else {    
    localStorage['n']++;
    localStorage['title'+localStorage['n']]=document.getElementById("name").value;
    localStorage['body'+localStorage['n']]=document.getElementById("tbody").value;
    document.location="success.html"
    }
}