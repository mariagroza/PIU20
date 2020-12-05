import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

let sircard = [
  {
    numar: "31.517",
    categ: "Înscriși pe liste permanente și speciale",
    culoare: "primary"
  },
  {
    numar: "14.130",
    categ: "Votanți pe liste permanente și speciale",
    culoare: "secondary"
  },
  { numar: "928", categ: "Votanți pe liste suplimentare", culoare: "info" },
  { numar: "166", categ: "Votanți cu urnă mobilă", culoare: "danger" },
  { numar: "15,224", categ: "Total votanți", culoare: "warning" },
  { numar: "48,30%", categ: "Prezență la urne", culoare: "success" }
];

let judete = [
  "Alba",
  "Arad",
  "Argeș",
  "Bacău",
  "Bihor",
  "Bistrița-Năsăud",
  "Botoșani",
  "Brașov",
  "Brăila",
  "București",
  "Buzău",
  "Caraș-Severin",
  "Călărași",
  "Cluj",
  "Constanța",
  "Covasna",
  "Dâmbovița",
  "Dolj",
  "Galați",
  "Giurgiu"
];

document.getElementById("app").innerHTML = `
    <div style="background-color: #32C787;">
      <div class="container">
        <h5 class="pt-3 pb-3 mb-0 d-inline-block" style="color: #FFF;">
        <i class="fas fa-city"></i>  Alegeri Europarlamentare 2019
        </h5>
		<div style = "float: right; padding: 9px 0;">
			<button type="button" class="btn btn-outline-light" style = "font-weight: bold;">
			<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
			<path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
		</svg> DESCARCA CSV</button>
			<button type="button" class="btn btn-outline-light" style = "font-weight: bold;">
			<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
</svg> REFERENDUM</button>
		</div>
</div>
</div>
<div class="container">
    <div class="row pt-5" id="carduri">
		</div>
		<div class="row pt-5">
    <select id="jud">
      <option value="0">Selectați județul...</option>
    </select>
    </div>
  </div> 
`;

const carduri = sircard.map((el) => {
    return `
  <div class="col-sm-2">
    <div class="card text-center h-100">
      <div class=${"bg-" + el.culoare}
        style="width: 80%; height: 40px; margin: -12px auto 0 auto"
      >
    </div>
    <div class="card-body">
      <h5 class="card-title">${el.numar}</h5>
      <p class="card-text" style="color: #888;">
        ${el.categ}
      </p>
    </div>
    </div>
    </div>`;
  })
  .reduce((continut, item) => {
    return continut + item + "\n";
	}, "");
	document.getElementById("carduri").innerHTML = carduri;

let selectJud = document.getElementById("jud");

for (let i in judete) {
  let option = document.createElement("option"); 
  option.value = i;
  option.text = judete[i];
  selectJud.appendChild(option); 
}