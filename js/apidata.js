function getapidata(){
    var xhhtp=new XMLHttpRequest();
  
    xhhtp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var response=JSON.parse(this.responseText);
            let table=document.getElementById("myTable");
          
            var count=0;
            for(var i=0;i<response.length;i++){

               var rowCount=table.rows.length;
               var row=table.insertRow(rowCount);
               var cell1=row.insertCell(0);
               var cell2=row.insertCell(1);
               var cell3=row.insertCell(2);
               cell1.innerHTML=response[i].id;
               cell2.innerHTML=response[i].title;
               
                var checkbox=document.createElement("input");
                checkbox.type="checkbox";
                
                if(response[i].completed==true){
                    checkbox.setAttribute("checked","true");
                    checkbox.setAttribute("disabled","true");
                }
                checkbox.addEventListener('change',(event)=>{
                    if(event.currentTarget.checked){
                        count++;
                        checkCounter(count);
                    }
                    else{
                        count--;
                    }
                })
                cell3.appendChild(checkbox);
             
            }
           
          
        }
      

    };
    xhhtp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
 
    xhhtp.send();

}
// var count=0;
function  checkCounter(count){
   
    var promise=new Promise(function(resolve,reject){
        setTimeout(function(){
            if(count==5){
                resolve("Your 5 tasks have been successfully completed");
            }
        },1000);
       
    });
    promise.then(function(msg){
        var modalContent=document.getElementById("modalContent");
        var overlay=document.getElementById("overlay");
        var mCloseBtn=document.getElementById("mCloseBtn");
        overlay.style.display="block";
        modalContent.innerText=msg;
        mCloseBtn.addEventListener("click",()=>{
            overlay.style.display="none";
        })
        
    });

} 

function logout(){
    window.location.href="./index.html";

}