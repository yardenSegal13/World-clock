function showCity() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkTime = newYorkElement.querySelector(".time");
    newYorkTime.innerHTML = moment()
      .tz("America/New_York")
      .format("h:mm:ss[<small>]A[</small>]");
    let newYorkDate = newYorkElement.querySelector(".date");
    newYorkDate.innerHTML = moment()
      .tz("America/New_York")
      .format(`D MMMM YYYY`);
  }
}

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  if (cityTimeZone.length > 0) {
    let cityTime = moment().tz(cityTimeZone);
    let city = cityTimeZone.replace("_", " ").split("/")[1];
    let cityBlock = document.querySelector("#cities");
    cityBlock.innerHTML = `<div class="city">
        <div class="date-block">
          <h2>${city}</h2>
          <div class="date">${cityTime.format("D MMMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
      "A"
    )}</small></div></div>
     `;
  } else {
    let cityBlock = document.querySelector("#cities");
    cityBlock.innerHTML = `<div class="city">
        <div class="date-block">
          <h2>Please select a city 😉</h2>
          <div class="date"></div>
        </div>
        <div class="time"><small>
       
    </small></div></div>
     `;
  }
}

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", changeCity);
showCity();
setInterval(showCity, 1000);
