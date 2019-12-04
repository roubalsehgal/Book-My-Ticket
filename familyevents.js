	var url = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=lgBmSsjcDDRRhKuGWt00Bwkwi9DGx1pg&countryCode=US&marketId=35&classificationName=family"

	var xHR = new XMLHttpRequest()
	xHR.open('GET', url);
	xHR.onreadystatechange = test

	function test(){
		if(this.status===200 && this.readyState===4){
			var res_data = JSON.parse(this.responseText)
			for (var i = 0; i < 9; i++) {
				var event = document.createElement('div')
				event.setAttribute('id', 'event-block')
				document.getElementById('displayevents').appendChild(event);

				//--- Image ---//
				var img_div = document.createElement('div')
				img_div.setAttribute('id', 'img_div')
				event.appendChild(img_div)

				var img = document.createElement('img')
				img.setAttribute('src', res_data._embedded.events[i].images[i].url)
				img_div.appendChild(img)


				//--- Details Block ---//
				var details = document.createElement('div')
				details.setAttribute('id', 'event-details')
				img_div.appendChild(details)

				//--- Genre ---//
				var genre = document.createElement('p')
				genre.setAttribute('id', 'genre')
				genre.innerHTML="Genre: "+res_data._embedded.events[i].classifications[0].genre.name;
				details.appendChild(genre)

				//--- Event Name ---//
				var name = document.createElement('h4')
				name.setAttribute('id', 'event-name')
				name.innerHTML=res_data._embedded.events[i].name
				details.appendChild(name)

				//--- Date ---//
				var date = document.createElement('h6')
				date.setAttribute('id', 'date')
				date.innerHTML="Date: "+res_data._embedded.events[i].dates.start.localDate
				details.appendChild(date)

				//--- Time ---//
				var T = document.createElement('h6')
				T.setAttribute('id', 'time')
				T.innerHTML="Time: "+res_data._embedded.events[i].dates.start.localTime
				details.appendChild(T)

				//--- Details button ---//
				var btn = document.createElement('button')
				btn.setAttribute('id', 'btn')
				details.appendChild(btn)

				//--- Link to details ---//
				var a = document.createElement('a')
				a.setAttribute('href', res_data._embedded.events[i].url)
				a.setAttribute('target', '_blank')
				btn.appendChild(a)
				a.innerHTML="Details"
			}
		}
	}
	xHR.send()

	