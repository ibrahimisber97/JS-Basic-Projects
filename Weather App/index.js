const apiKey="f786ba85c4505e977f003ca89c908273";
            const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

            const searchBox = document.querySelector(".search input");
            const searchBtn = document.querySelector(".search button");
            const wheatherIcon = document.querySelector(".wheather-icon");

            async function checkWeather(city){
                const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
                if(response.status == 404){
                    document.querySelector(".error").style.display="block";
                    document.querySelector(".weather").style.display="none";
                }
                else{
                var data = await response.json();
                
                document.querySelector(".city").innerHTML=data.name;
                document.querySelector(".temp").innerHTML=Math.round(data.temp)+ "°C";
                document.querySelector(".humidity").innerHTML=data.main.humidity + "%" ;
                document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

                if(data.Weather[0].main=="cloud"){
                    wheatherIcon.src = "images/clouds.png";
                }
                else if(data.Weather[0].main=="Clear"){
                    wheatherIcon.src = "images/clear.png";
                }
                else if(data.Weather[0].main=="Rain"){
                    wheatherIcon.src = "images/rain.png";
                }
                else if(data.Weather[0].main=="Drizzle"){
                    wheatherIcon.src = "images/drizzle.png";
                }
                else if(data.Weather[0].main=="Mist"){
                    wheatherIcon.src = "images/mist.png";
                }
                document.querySelector(".wheather").style.display="block";
                document.querySelector(".error").style.display="none";
            
            }
                }
            searchBtn.addEventListener("click", ()=>{
                checkWeather(searchBox.value);
            })