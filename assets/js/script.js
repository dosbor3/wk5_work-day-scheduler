// on page load, restore previous session
displayDate();
if (!localStorage.event){

}
else {
  restorePage();
}

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

function restorePage() {
  var test = localStorage.getItem("event");
  
}

function displayDate() {
  var currentDate = new Date();
  currentDate = moment(currentDate).format("MMM Do YYYY");
  $("#currentDay.lead").text(currentDate);
  $("p[id='currentDay']").show();

  var past = currentDate
}


  