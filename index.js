var x = document.getElementById("search");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
	x.value = "NewYork, United States"
}
function exploreIt(){
	window.open("explore.html")
}