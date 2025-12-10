

//Weather API

fetch("http://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=38d995fbf38e36d8eb0acfa3a594c69f&units=metric")
.then(response=>response.json())
.then(data=>{
    cancun_temp.textContent= data.main.temp+" \u00B0C";

    let current_weather_icon = data.weather[0].icon;
    let iconURL = `https://openweathermap.org/img/wn/${current_weather_icon}@2x.png`;
    weather.src = iconURL;

})

.catch(error =>{
    console.error("error fetching weather data:",error);
})

//Search Button shows and hides Search input

search_button.addEventListener('click',function(){

    var search_show = document.getElementById("search_input");
    if (search_show.style.display === "none"){
        search_show.style.display ="initial";}
    else {
        search_show.style.display = "none"
    }

})

//Hamburger Menu
const hamburgerButton = document.getElementById('hamburger');
            const mainNav = document.getElementById('nav_categories');

            hamburgerButton.addEventListener('click',function(){
        
                mainNav.classList.toggle('active');
            })