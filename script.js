var today = moment();
saveBtnEl = $("saveBtn");

$("#currentDay").text(today.format("LL"));


saveBtnEl.on('click', function () {
    localStorage.set();
  });

  //upon refresh - localStorage.get
  //change colors depending on time (setInterval?)