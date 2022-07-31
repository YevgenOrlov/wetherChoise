let ret = { UK: "Edinburgh", US: "New York", UA: "Vinnytsya" };
let select = document.querySelector("#chengeCity");
select.onchange = function () {
  console.log(select.value);
  let key = ret.key;
  let city = select.value;
  console.log(city);
  console.log(key);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${key}&appid=8b5388e2c898b936c5f2ce14fbad4939`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".package-name").innerHTML = data.name;
      document.querySelector(".price").innerHTML =
        Math.round(data.main.temp - 273) + "&deg;";
      document.querySelector(".price1").innerHTML =
        "pressure " + data.main.pressure + "hPa ";
      document.querySelector(".disclaimer").textContent =
        data.weather[0]["description"];
      document.querySelector(".price2").innerHTML =
        "wind  " + data.wind.speed + "   m/c ";
      document.querySelector(
        ".features li"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    });
  // .catch(function(){})
};
