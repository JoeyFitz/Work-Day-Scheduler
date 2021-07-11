saveBtnEl = $("#9amSaveBtn");
var nineAM = $("#9am");

var today = moment();
$("#currentDay").text(today.format("LL"));

saveBtnEl.on('click', function (event) {
    //look up if it should be a 'click' or 'submit' and if 'click' then is preventDefault necessary?
    event.preventDefault();
    var calEvent = nineAM.val();
    if (calEvent == null){
        console.log("no event to schedule");
    }
    else {
        // console.log(calEvent);
    localStorage.setItem("9am", calEvent);
    }
  });

window.onload = function() {
    var eventName = localStorage.getItem("9am");
    if (eventName !== null) nineAM.val(eventName);
    //change colors depending on time (setInterval?)
}
