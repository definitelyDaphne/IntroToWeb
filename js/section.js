function createSectionInsideContent(secList){
	let htmlContent = document.getElementById('content');
	secList.forEach(el=>{
		let newDiv = document.createElement('div'); 

		newDiv.setAttribute('id',el);
		newDiv.insertAdjacentHTML('beforeend', '<h2>'+el+'</h2>'); //insert div title

		htmlContent.appendChild(newDiv);
		newDiv.insertAdjacentHTML('afterend', '<hr>'); //insert div title
	});
}

function addButtonLink(id,link){
	document.getElementById(id).onclick = function () {
        window.location.href = link;
    };
}