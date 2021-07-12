//Code feels rather inefficient. Perhaps there is more clever use of arrays, forEach or some other method but couldn't make anything work

//using JQuery to assign variables for each hourly input block
nine = $("#nine");
ten = $("#ten");
eleven = $("#eleven");
twelve = $("#twelve");
thirteen = $("#thirteen");
fourteen = $("#fourteen");
fifteen = $("#fifteen");
sixteen = $("#sixteen");
//using JQuery to assign variables to each save button
saveNine = $("#saveNine");
saveTen = $("#saveTen");
saveEleven = $("#saveEleven");
saveTwelve = $("#saveTwelve");
saveThirteen = $("#saveThirteen");
saveFourteen = $("#saveFourteen");
saveFifteen = $("#saveFifteen");
saveSixteen = $("#saveSixteen");

//Uses moment.js to pull current date for display
var today = moment();
$("#currentDay").text(today.format("LL"));

//what to execute upon loading the page
window.onload = function() {

    //Load the schedule blocks from local storage (if any)
    var loadNine = localStorage.getItem("9am");
    if (loadNine !== null) nine.val(loadNine);
    var loadTen = localStorage.getItem("10am");
    if (loadTen !== null) ten.val(loadTen);
    var loadEleven = localStorage.getItem("11am");
    if (loadEleven !== null) eleven.val(loadEleven);
    var loadTwelve = localStorage.getItem("12pm");
    if (loadTwelve !== null) twleve.val(loadTwelve);
    var loadThirteen = localStorage.getItem("1pm");
    if (loadThirteen !== null) thirteen.val(loadThirteen);
    var loadFourteen = localStorage.getItem("2pm");
    if (loadFourteen !== null) fourteen.val(loadFourteen);
    var loadFifteen = localStorage.getItem("3pm");
    if (loadFifteen !== null) fifteen.val(loadFifteen);
    var loadSixteen = localStorage.getItem("4pm");
    if (loadSixteen !== null) sixteen.val(loadSixteen);

    //Change background color of input block(s) to red if it's the present hour or green if it's a future hour
    if (today.hour() == 9) { nine.css("background-color","red"); }
    if (today.hour() < 9) { nine.css("background-color", "green"); }
    if (today.hour() == 10) { ten.css("background-color","red"); }
    if (today.hour() < 10) { ten.css("background-color", "green"); }
    if (today.hour() == 11) { eleven.css("background-color","red"); }
    if (today.hour() < 11) { eleven.css("background-color", "green"); }
    if (today.hour() == 12) { twelve.css("background-color","red"); }
    if (today.hour() < 12) { twelve.css("background-color", "green"); }
    if (today.hour() == 13) { thirteen.css("background-color","red"); }
    if (today.hour() < 13) { thirteen.css("background-color", "green"); }
    if (today.hour() == 14) { fourteen.css("background-color","red"); }
    if (today.hour() < 14) { fourteen.css("background-color", "green"); }
    if (today.hour() == 15) { fifteen.css("background-color","red"); }
    if (today.hour() < 15) { fifteen.css("background-color", "green"); }
    if (today.hour() == 16) { sixteen.css("background-color","red"); }
    if (today.hour() < 16) { sixteen.css("background-color", "green"); }
}

saveNine.on('click', function (event) {
    var my9oclock = nine.val();
    if (my9oclock == null){
        console.log("no event to schedule");
    }
    else {
    localStorage.setItem("9am", my9oclock);
    }
})

saveTen.on('click', function (event) {
    var my10oclock = ten.val();
    if (my10oclock == null){
        console.log("no event to schedule");
    }
    else {
    localStorage.setItem("10am", my10oclock);
    }
})

saveEleven.on('click', function (event) {
    var my11oclock = eleven.val();
    if (my11oclock == null){
        console.log("no event to schedule");
    }
    else {
    localStorage.setItem("11am", my11oclock);
    }
})

saveTwelve.on('click', function (event) {
    var my12oclock = twelve.val();
    if (my12oclock == null){
        console.log("no event to schedule");
    }
    else {
    localStorage.setItem("12pm", my12oclock);
    }
})

saveThirteen.on('click', function (event) {
    var my1oclock = thirteen.val();
    if (my1oclock == null){
        console.log("no event to schedule");
    }
    else {
    localStorage.setItem("1pm", my1oclock);
    }
})

saveFourteen.on('click', function (event) {
    var my2oclock = fourteen.val();
    if (my2oclock == null){
        console.log("no event to schedule");
    }
    else {
    localStorage.setItem("2pm", my2oclock);
    }
})

saveFifteen.on('click', function (event) {
    var my3oclock = fifteen.val();
    if (my3oclock == null){
        console.log("no event to schedule");
    }
    else {
    localStorage.setItem("3pm", my3oclock);
    }
})

saveSixteen.on('click', function (event) {
    var my4oclock = sixteen.val();
    if (my4oclock == null){
        console.log("no event to schedule");
    }
    else {
    localStorage.setItem("4pm", my4oclock);
    }
})

