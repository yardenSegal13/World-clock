function update() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkTime = newYorkElement.querySelector(".time");
  newYorkTime.innerHTML = moment()
    .tz("America/New_York")
    .format("h:mm:ss[<small>]A[</small>]");
  let newYorkDate = newYorkElement.querySelector(".date");
  newYorkDate.innerHTML = moment().tz("America/New_York").format(`D MMMM YYYY`);
}

update();
setInterval(update, 1000);
