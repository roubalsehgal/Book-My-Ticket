var x = document.getElementById("search");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alter("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  x.value = "New York, United States of America"
}

function showEvents() {
	window.open("explore.html")
}
