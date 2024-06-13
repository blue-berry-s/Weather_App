const location_Text = document.getElementById("location_text");
const search_bar = document.getElementById("search_bar");
const temp_text = document.getElementById("tempature_text");
const percip_text = document.querySelector('.percipi_probability');
const hi_text = document.getElementById('high_text');
const lo_text = document.getElementById('low_text');

const LOCAPIBEFORE = 'https://geocode.maps.co/search?q=';
const LOCAPIKEY = '&api_key=6669af5c5b2d4496675341brc2a1bbc';

let longitude = 0;
let latitude = 0;
let CURRENTWEATHER = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weather_code&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`;

search_bar.addEventListener("submit", findLocation)


function findLocation(event){
    event.preventDefault();
    let fetchLocation = fetch(LOCAPIBEFORE + processSearch()+ LOCAPIKEY);
    fetchLocation.then(response => {
        return response.json();
    }, error =>{ 
        window.alert(error);

    }).then(location =>{
        try{
            location_Text.innerText = location[0].display_name;
            search_bar.search.value = "";
            longitude = location[0].lon;
            latitude = location[0].lat;
            findWeather();
        }
        catch(error){ 
            window.alert("No location found :(");
        }
    }, error =>{ 
        window.alert(error);

    })

}



function processSearch(){
    let input = search_bar.search.value;
    let processed = input.replaceAll(/,\s|,|\s/g,'+');
    return processed;
}

function getCountry(text){
    const split_text = text.split(/,\s/);
    return split_text[split_text.length - 1];
}


function getLocationText(entered, country){

    const fixed = capitalize(entered).trim();
    const split_entered = fixed.includes(',') ? text.split(/,\s|,/) : [fixed]
    

    if (split_entered[split_entered.length - 1].toLowerCase() == country.trim().toLowerCase()){
        return fixed;
    }
    else{
        return fixed + ", " + country.trim();
    }

}



function findWeather(){
    console.log(CURRENTWEATHER = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weather_code&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`);
    let fetchWeather = fetch(CURRENTWEATHER);
    fetchWeather.then(response => {
        return response.json();
    }, error =>{ 
        window.alert(error);

    }).then(weather =>{
        try{
            temp_text.innerText = Math.round(weather.hourly.temperature_2m[0]); 
            temp_text.append(createDegrees());
            percip_text.innerHTML = "P: " + weather.hourly.precipitation_probability[0] + "&#37;";
            hi_text.innerHTML = "H: " + Math.round(weather.daily.temperature_2m_max[0]);
            hi_text.append(createDegrees());
            lo_text.innerHTML = "L: " + Math.round(weather.daily.temperature_2m_min[0]);
            lo_text.append(createDegrees());

        }
        catch(error){ 
            window.alert(error);
        }
    }, error =>{ 
        window.alert(error);

    })
}

function createDegrees(){
    const degreeSign = document.createElement("span");
    degreeSign.innerHTML = '&deg;';
    degreeSign.setAttribute("class", "degree_style");
    return degreeSign;
}




