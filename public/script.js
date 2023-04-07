var selectButton = $(".dropbtn");
// const div = $("result");

selectButton.on('click', function(){
//   $("#results").empty();
  var userInput = $("input").val()


fetch('/api/music/albums')
  .then(response => response.json())
  .then(albums => {
      console.log(albums)

      // for (let i = 0; i < data.length; i++){
          //     let album = [];
          //     let albums = data.
          
          
          
          // let newDiv = $(`
          //     <div class="card border-danger mb-3 bg-dark-subtle" style="max-width: 18rem;">
          //         <div class="card-body text-danger">
          //         <h1 class="card-header">Search Results</h1>
          //         <div class="band" class="card-text">Band: ${result.species}</div>
          //         <div class="year" class="card-text">Year: ${result.gender}</div>
          //         <div class="songs" class="card-text">Songs: ${result.origin.name}</div>
          //         <a tabindex="0" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Episode List" data-bs-content="${episodes.join('\n')}" aria-describedby="popover6159">Episodes</a>
          //         </div>
          //        </div> 
          //        `)
          
          //        div.append(newDiv) 
        })
      })

   