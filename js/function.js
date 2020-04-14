function createSections(secList){
	let content = document.getElementById('content');
	secList.forEach(el=>{
		let newDiv = document.createElement('div'); 

		//add section name & parent to div class
		newDiv.className += `${el} parent`;
		newDiv.insertAdjacentHTML('beforeend', '<h2>'+el+'</h2>'); //insert div title

		content.appendChild(newDiv);
		newDiv.insertAdjacentHTML('afterend', '<hr>'); //insert div title
	});
}

function matchHTMLcontent(secList){
	secList.forEach(el=>{
		let p = document.getElementsByClassName(`${el} parent`)[0];
		let c = document.getElementsByClassName(`${el} child`)[0];
		if(c){//if the child section is specified, append to title
			p.appendChild(c);
		}
	});
}

function addButtonLink(id,link){
	document.getElementById(id).onclick = function () {
        window.location.href = link;
    };
}

function loadAJAX(param){
	//fetch API, please don't misuse my API key thanks
	//I will put that in .env if I'm gonna host it somewhere or make public
	const url = `https://api.themoviedb.org/3/search/movie?api_key=a12f81080f64afdcb1b3151b2cadcdac&language=en-US&query=${param}&page=1&include_adult=false`;
	
	fetch(url)
  	.then((response) => {
    	return response.json();
  	})
  	.then((data) => {
    	console.log(data);
    	let resultDiv = document.getElementById("result");
    	resultDiv.innerHTML="";

    	data.results.forEach((result) => {
    		let poster = document.createElement("img"),
    		title = document.createElement("h3"),
    		releaseDate = document.createElement("div"),
    		overview = document.createElement("div");

    		if(result.poster_path){
    			poster.src=`https://image.tmdb.org/t/p/original${result.poster_path}`;
    			poster.width=300;
    			poster.alt="image cannot be display"

    			title.innerHTML=`${result.title}`;
    			releaseDate.innerHTML=`Release on:${result.release_date}`;
    			overview.innerHTML=`${result.overview}`;
    			overview.style.width="300px";

    			resultDiv.appendChild(poster);
    			resultDiv.appendChild(title);
    			resultDiv.appendChild(releaseDate);
    			resultDiv.appendChild(overview);
    		}
    		else{
    			return
    		}	
    	})
  	})
  	.catch((error) =>{
  		console.log(error);
  	});
}

function addSkill(level,name,description){
    let skillDiv = document.createElement("div");
    skillDiv.className += "row container-fluid m-0 p-0 skill-level";

    let levelDiv = document.createElement("div");
    levelDiv.className += "text-wrap pl-0 col-lg-4 col-sm-6";
    levelDiv.innerHTML = level;

    let nameDiv = document.createElement("div");
    nameDiv.className += "text-wrap pl-0 col-lg-2 col-sm-6";
    nameDiv.innerHTML = name;
    nameDiv.style.fontWeight = "bold";

    let descriptionDiv = document.createElement("div");
    descriptionDiv.className += "col-lg-6 col-sm-12";
    descriptionDiv.innerHTML = description;

    skillDiv.appendChild(levelDiv);
    skillDiv.appendChild(nameDiv);
    skillDiv.appendChild(descriptionDiv);

	document.getElementsByClassName("Skill-set")[0].appendChild(skillDiv);
}


function resetZero(){

    let m = document.getElementById('margin');
    let p = document.getElementById('padding');
    let b = document.getElementById('border')

    m.style.margin='0px';
    p.style.padding='0px';
    b.style.border='0px solid';

    m.value="0";
    p.value="0";
    b.value="0";
}
