






let NewMovies = JSON.parse(movies);
var column = "";

column += `<div class="row">`

for (let val of NewMovies) {
  column += `
  <div class=" mb-r p-1 col col-12 col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
  <div class="row g-1 container-fluid bg-card ">
    <div class="col-md-4">
      <img src="${val.image}" style="width:100%;" class="" alt="posters">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 >${val.name}</h5>
        <p >${val.description}</p>
        <button type="button" class="NumBut btn btn-success ">Like &#128077; 
        <span class="numbers">${val.likes}</span></button>
      </div>
    </div>
  </div>
</div>
`
}
column += `</div>`;
document.getElementById("container").innerHTML += column;






//i dont know what is missing but it only works when i press the numbers 

var butts = document.getElementsByClassName("numbers");


for (let i = 0; i < butts.length; i++) {
  butts[i].addEventListener("click", function(){
    MoreLikes(i);
  });
}


function MoreLikes(index){
  var Movielikes = Number(butts[index].innerHTML) + 1;
  butts[index].innerHTML = Movielikes;
} 