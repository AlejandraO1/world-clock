function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateElement = londonElement.querySelector(".date");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");

  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonDateElement = lisbonElement.querySelector(".date");

  lisbonDateElement.innerHTML = moment()
    .tz("Europe/Lisbon")
    .format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = moment()
    .tz("Europe/Lisbon")
    .format("h:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime, 1000);
