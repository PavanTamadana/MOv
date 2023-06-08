const MoviesContainer1 = document.querySelector('.right1');
const MoviesContainer2 = document.querySelector('.right2');

const renderMovie1 = function(data){
        const html =`
        <article class="movie">
        <img class="movie_img" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}"/>
        <div class="movie_data">
            <h3 class="movie_name">${data.original_title}</h3>
            
            
        </div>
        </article>` ;
     MoviesContainer1.insertAdjacentHTML('beforeend',
        html);
        MoviesContainer1.style.opacity = 1;
};
const renderMovie2 = function(data){
    
    const html =`
    <article class="movie">
    <img class="movie_img" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}"/>
    <div class="movie_data">
        <h3 class="movie_name">${data.original_title}</h3>
        
        
    </div>
    </article>` ;
    MoviesContainer2.insertAdjacentHTML('beforeend',
    html);
    MoviesContainer2.style.opacity = 1;

    

};


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzA2OTk4MzQyZWM2MjAyOTMzNDNjOGY4Y2ZkNjAxMSIsInN1YiI6IjY0NzgyOTRkZTMyM2YzMDBhN2Q0MmY2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DWMVzBx20ChZWO4RO4uxHyQ-CHN7HlYgutkqTm1uois'
    }
  };
  
  

for(let i=0;i<4;i++){
  
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => renderMovie1(response.results[i]))
    .catch(err => console.error(err));
}


for(let i=5;i<9;i++){  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => renderMovie2(response.results[i]))
  .catch(err => console.error(err));    
}
