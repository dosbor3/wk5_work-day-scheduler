//store daily tasks and times
var tasks = {};
 

$(".btn").click(function(){  
  console.log(this);
  
  //capture tasks  
  var time = (this.id).replace("save-", ""); 
  var str = $("input[id=" + time + "]").val();

  tasks.event = str.trim();
  tasks.time = time.trim();   

  saveDataToLocalStorage(tasks);  

});

//function to save data to local storage
function saveDataToLocalStorage(data)
{
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];
    a.push(data);
    localStorage.setItem('session', JSON.stringify(a));
}


  