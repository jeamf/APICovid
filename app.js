// const getCovidUrl = id =>  `https://api.brasil.io/v1/dataset/covid19/caso/data/${id}` // API onde será colocado o link da API do professor
function callAPI(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function () {
		var status = xhr.status;
		if (status === 200) {
			callback(status, xhr.response);
		} else {
			alert("erro");
		}
	}
	xhr.send();
}

callAPI('https://api.covid19api.com/summary', function(status,data) {
	console.log(data.Countries);
	var ul = document.getElementById("covid");
	data.Countries.forEach(function(pais) {
		console.log(pais);
		/*
		esse é o retorno de console.log(pais):
		{
		"ID": "28a23d39-f733-42b1-9aba-7017332c3338",
		"Country": "Afghanistan",
		"CountryCode": "AF",
		"Slug": "afghanistan",
		"NewConfirmed": 116,
		"TotalConfirmed": 201212,
		"NewDeaths": 0,
		"TotalDeaths": 7811,
		"NewRecovered": 0,
		"TotalRecovered": 0,
		"Date": "2022-10-17T23:49:04.34Z",
		"Premium": {}
		}
		*/
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(
			"País: " + pais.Country + 
			" | Código: " + pais.CountryCode + 
			" | Total Confirmados: " + pais.TotalConfirmed 
		));
		ul.appendChild(li);
	});
})
