var button = $("#submit");
const div = $(".connect");

button.on('click', function(){
  $(".connect").empty();
  var userInput = $("input").val()


fetch(`/api/music/albums/${userInput}`)
  .then(response => response.json())
  .then(data => {
      console.log(data)

      for (let i = 0; i < data.length; i++){
          let artist = data[i];
    
          let newDiv = $(`
                  <div>${artist.album}</div>
                  <div class="year">Year: ${artist.year}</div>
                  <div class="songs">Songs: ${artist.songs}</div>
                 `)
          
                 div.append(newDiv) 
          }
        })
      })

   //   <h1>Search Results</h1>
                //   <div class="band">Band: ${artist.album}</div>
                //   <div class="year">Year: ${artist.year}</div>
                //   <div class="songs">Songs: ${artist.songs}</div>