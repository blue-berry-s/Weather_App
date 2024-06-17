const location_Text = document.getElementById("location_text");
const search_bar = document.getElementById("search_bar");
const temp_text = document.getElementById("tempature_text");
const percip_text = document.querySelector('.percipi_probability');
const hi_text = document.getElementById('high_text');
const lo_text = document.getElementById('low_text');

const bg1 = document.getElementById('alt_1');
const bg2 = document.getElementById('alt_2');

let changebg = 1;


const main_img = document.getElementById('weather_icon');
const weather_cond_text = document.getElementById('weather_cond_text');

const future_predictions = document.getElementsByClassName('future_forecast_tabs');


const LOCAPIBEFORE = 'https://geocode.maps.co/search?q=';
const LOCAPIKEY = '&api_key=6669af5c5b2d4496675341brc2a1bbc';

let longitude = 0;
let latitude = 0;
let CURRENTWEATHER = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weather_code&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`;
let FUTUREWEATHER = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,apparent_temperature_max,precipitation_probability_max`;


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
            findFutureWeather();
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


function findWeather(){
    CURRENTWEATHER = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weather_code&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`;
    let fetchWeather = fetch(CURRENTWEATHER);
    fetchWeather.then(response => {
        return response.json();
    }, error =>{ 
        window.alert(error);

    }).then(weather =>{
        try{
            updateMainWeather(weather)
        
        }
        catch(error){ 
            window.alert(error);
        }
    }, error =>{ 
        window.alert(error);

    })
}

function findFutureWeather(){
    FUTUREWEATHER = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,apparent_temperature_max,precipitation_probability_max`;
    let fetchFuture = fetch(FUTUREWEATHER);
    fetchFuture.then(response => {
        return response.json();
    }, error =>{ 
        window.alert(error);

    }).then(weather =>{
        updateFutureWeather(weather)
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

//the function of updating temperature/percipitation could become it's own function


function updateMainWeather(weather){
    temp_text.innerText = Math.round(weather.hourly.temperature_2m[0]); 
            temp_text.append(createDegrees());
            percip_text.innerHTML = "P: " + weather.hourly.precipitation_probability[0] + "&#37;";
            hi_text.innerHTML = "H: " + Math.round(weather.daily.temperature_2m_max[0]);
            hi_text.append(createDegrees());
            lo_text.innerHTML = "L: " + Math.round(weather.daily.temperature_2m_min[0]);
            lo_text.append(createDegrees());

            const weather_code = weather.hourly.weather_code[0];
            
            const weather_obj = weather_code_dict[weather_code];

            main_img.src = weather_obj.img_src;
            weather_cond_text.innerText = weather_obj.weather_cond_text;

            if (changebg == 0){
                bg1.style.background = weather_obj.color_gradient_main;
                bg1.classList.add('show');
                bg1.classList.remove('hide');
                bg2.classList.add('hide');
                bg2.classList.remove('show');
                changebg = 1;
            }
            else {
                bg2.style.background = weather_obj.color_gradient_main;
                bg2.classList.add('show');
                bg2.classList.remove('hide');
                bg1.classList.add('hide');
                bg1.classList.remove('show');    
                changebg = 0;
            }
            
}


function updateFutureWeather(weather){

    console.log(future_predictions.length);
    const today = new Date();
    let days_ahead = 1;
    for (var i = 0; i < future_predictions.length; i ++){
        let date_text = future_predictions[i].querySelector('.days');
        let temperature_text = future_predictions[i].querySelector('.tempature');
        let percip_text = future_predictions[i].querySelector('.percipi_probability');
        let weather_icon = future_predictions[i].querySelector('.forecast_img');


        date_text.innerHTML = i+1;
        temperature_text.innerHTML = Math.round(weather.daily.apparent_temperature_max[i+1]); 
        temperature_text.append(createDegrees());

        percip_text.innerHTML = "P: " + weather.daily.precipitation_probability_max[i+1] + "&#37;";

        let weather_obj = weather_code_dict[weather.daily.weather_code[i+1]];

        weather_icon.src = weather_obj.img_src;

        future_predictions[i].style.background = weather_obj.color_gradient_predict;
    }

}



