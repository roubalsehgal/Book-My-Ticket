

	var url = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=lgBmSsjcDDRRhKuGWt00Bwkwi9DGx1pg&countryCode=US&marketId=35"

	var xHR = new XMLHttpRequest()
	xHR.open('GET', url);
	xHR.onreadystatechange = test

	function test(){
		if(this.status===200 && this.readyState===4){
			var res_data = JSON.parse(this.responseText)
			console.log(res_data)
			for (var i = 0; i < 9; i++) {
				var event = document.createElement('div')
				event.setAttribute('id', 'event-block')
				document.getElementById('displayevents').appendChild(event);

				var img_div = document.createElement('div')
				img_div.setAttribute('id', 'img_div')
				event.appendChild(img_div)
				console.log(event)

				var img = document.createElement('img')
				img.setAttribute('src', res_data._embedded.events[i].images[i].url)
				console.log(img)
				img_div.appendChild(img)

				var genre = document.createElement('p')
				genre.setAttribute('id', 'genre')
				genre.innerHTML="genre: "+res_data._embedded.events[i].classifications[0].genre.name;
				img_div.appendChild(genre)

				var name = document.createElement('h4')
				name.setAttribute('id', 'event-name')
				name.innerHTML=res_data._embedded.events[i].name
				img_div.appendChild(name)
				console.log(name)

			}
		}
	}
	xHR.send()

