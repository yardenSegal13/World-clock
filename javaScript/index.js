function showCity() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkTime = newYorkElement.querySelector(".time");
    let newYorkDate = newYorkElement.querySelector(".date");
    newYorkTime.innerHTML = moment().tz("America/New_York").format("HH:mm:ss");
    newYorkDate.innerHTML = moment()
      .tz("America/New_York")
      .format(`D MMMM YYYY`);
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoTime = tokyoElement.querySelector(".time");
    let tokyoDate = tokyoElement.querySelector(".date");
    tokyoTime.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");
    tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format(`D MMMM YYYY`);
  }
  let alaskaElement = document.querySelector("#alaska");
  if (alaskaElement) {
    let alaskaTime = alaskaElement.querySelector(".time");
    let alaskaDate = alaskaElement.querySelector(".date");
    alaskaTime.innerHTML = moment().tz("US/Alaska").format("HH:mm:ss");
    alaskaDate.innerHTML = moment().tz("US/Alaska").format(`D MMMM YYYY`);
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
        <div class="time">${cityTime.format("HH:mm:ss")}</div></div>
    <a href="/" class="back"> Home page</a>
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
