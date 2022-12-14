function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoDateElement = tokyoElement.querySelector(".date");

    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDateElement = londonElement.querySelector(".date");

    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyDateElement = sydneyElement.querySelector(".date");

    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time"> ${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
          </div>
        </div>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
