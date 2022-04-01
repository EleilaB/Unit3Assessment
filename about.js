console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form has been successfully submitted!`);
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function goodTaste() {
	alert(`I see you have good taste in ducks!`)
}

document.querySelector("#rubber-duck").addEventListener("mouseover", goodTaste)