function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoDateElement = tokyoElement.querySelector(".date");

  tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");

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

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyDateElement = sydneyElement.querySelector(".date");

  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime, 1000);
