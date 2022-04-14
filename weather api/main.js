const API_KEY = `H97rzxpnAlf8pOkIglQa5OCnMA6oj75j`


const locationInput = document.querySelector('.location')
const temp = document.querySelector('.temp')
const weatherBtn = document.querySelector('.btn')

// let getWeather = () => {
//     let locationKey = locationInput.value
//     console.log(locationKey)
    
//     URL = `http://dataservice.accuweather.com/locations/v1/search?=q${locationKey}&apikey=${API_KEY}`
    
//     // URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

//     fetch(URL)
//         .then(res => res.json())
//         .then(data =>  {
//             console.log(data)})
//         .catch(err => console.log(err))

// }


weatherBtn.addEventListener('click',  () => {
    getCity('Newmanstown');
    getWeather();
})



////! dev.to tutorial
// getting weather

const getWeather = async (id) => {
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${API_KEY}`;

    const res = await fetch(baseUrl + query);
    const data = await res.json();
  
    return data[0];
  };
  
  // getting city
  const getCity = async (city) => {
    const baseUrl =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${API_KEY}&q=${city}`;
  
    const res = await fetch(baseUrl + query);
    const data = await res.json();
  
    return data[0];
  };