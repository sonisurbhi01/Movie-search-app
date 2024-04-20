// console.log("task1")
// console.log("task1")
// console.log("task1")

let api="https://www.omdbapi.com/?apikey=b2497d74&t="
let title= document.getElementById('title')
let actors= document.getElementById('actors')
let ratings= document.getElementById('ratings')
let director= document.getElementById('director')
let collection= document.getElementById('collection')
let desc= document.getElementById('desc')
let awards= document.getElementById('awards')
let genre= document.getElementById('genre')
let date= document.getElementById('date')
let poster= document.getElementById('poster')
let writer= document.getElementById('writer')

function searchMovie(){
    let movieName = document.getElementById('movieName')
    let query = api+movieName.value 
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
    //   console.log(data)
    title.innerText=data.Title;
    date.innerText=data.Released;
    director.innerText=data.Director;
    awards.innerText=data.Awards;
    actors.innerText=data.Actors;
    desc.innerText=data.Plot;
    genre.innerText=data.Genre;
    ratings.innerText=data.imdbRating;
    collection.innerText=data.BoxOffice;
    writer.innerText=data.Writer;
    poster.src=data.Poster;
    })

}