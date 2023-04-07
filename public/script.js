var selectButton = $(".dropbtn");
const div = $(".connect");

selectButton.on('click', function(){
  $(".connect").empty();
  var userInput = $("input").val()


fetch('/api/music/albums')
  .then(response => response.json())
  .then(data => {
      console.log(data)

      for (let i = 0; i < data.length; i++){
          let div = ('.connect');
          let artist = data[i];
           newDiv.remove(),
    
          let newDiv = $(`
              <div class="card border-danger mb-3 bg-dark-subtle" style="max-width: 18rem;">
                  <div class="card-body text-danger">
                  <h1 class="card-header">Search Results</h1>
                  <div class="band" class="card-text">Band: ${artist.album}</div>
                  <div class="year" class="card-text">Year: ${artist.year}</div>
                  <div class="songs" class="card-text">Songs: ${artist.songs}</div>
                  <a tabindex="0" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Episode List" data-bs-content="${episodes.join('\n')}" aria-describedby="popover6159">Episodes</a>
                  </div>
                 </div> 
                 `)
          
                 div.append(newDiv) 
          }
        })

      })

   