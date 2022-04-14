
const backDrop = document.querySelector('.pic');
const title = document.querySelector('.title');
const tagLine = document.querySelector('.tagline')
const poster = document.querySelector('.poster');
const budget = document.querySelector('.budget');
const revenue = document.querySelector('.revenue');
const rating = document.querySelector('.rating')
const hours = document.querySelector('.hours')
const mins = document.querySelector('.minutes')
const overview = document.querySelector('.overview')
const webpage = document.querySelector('.webpage')
const profit = document.querySelector('.profit')






let getNewMovie = () => {
    let random = Math.ceil(Math.random() * 15000)
    console.log(random)
    URL = `https://api.themoviedb.org/3/movie/${random}?api_key=60e1cf29566133f8db1d2b4c631cbf37`
    // URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"


    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            // Populate the data
            title.innerText = (data['title'])
            tagLine.innerText = (data['tagline'])
            
            rating.innerText = (data['vote_average'])
            
            // convert numbers to a more readable format
            let running = data['runtime']
            let hrs = Math.floor(running / 60)
            let mns = running - (hrs * 60)

            console.log('hours ', hrs)
            console.log('mins ', mns)

            let budg = (data['budget'])
            let rev = (data['revenue'])

            // convert to easy nums
            let prof = ((rev - budg) / 1000000).toFixed(2)

            hours.innerText = hrs
            mins.innerText = mns
            
            overview.innerText = (data['overview'])
            webpage.href = (data['homepage'])


            if (budg === 0 || rev === 0 || prof === 0.00) {
                profit.innerText = `No budget or revenue data for ${data['title']}`
            } else {
                profit.innerText = `$ ${prof} million`
            }


            let backDrop = (data['backdrop_path'])
            if(backDrop) {
                document.querySelector('.loading').style.display = 'none'
                document.querySelector('.container').style.display = 'block'; 

                poster.src = `https://image.tmdb.org/t/p/original${backDrop}`
            } else {
                document.querySelector('.loading').style.display = 'block'
                document.querySelector('.container').style.display = 'none'
                getNewMovie()
            }
        })
        .catch(err => console.log(err))
}



const newMovieBtn = document.querySelector('.btn').addEventListener('click', getNewMovie)


////! below is practice

const main = document.querySelector('#content')
const IMGPATH = "https://image.tmdb.org/t/p/w1280";


function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach((movie => {
        const { poster_path, title, vote_average, overview } = movie
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMGPATH + poster_path}" alt = "${title} />
        `
    }))
}