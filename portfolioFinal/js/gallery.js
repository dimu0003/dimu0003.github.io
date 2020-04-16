const gallery = document.getElementById('gallery');

const model = document.getElementById('model');
const imageData = [
	{
		name: "Black and White Date",
		link: "images/lionyls6.jpg",
		title: "Dueling Banjos"
	},	{
		name: "Lionyls 1",
		link: "images/lionyls-3.jpg",
		title: "Lionyls 1"
	},	{
		name: "Lionyls 2",
		link: "images/lionyls-2.jpg",
		title: "Lionyls 2"
	},	{
		name: "Lionyls 3",
		link: "images/lionyls-1.jpg",
		title: "Lionyls 3"
	},	{
		name: "Lionyls 4",
		link: "images/lionyls-5.jpg",
		title: "Lionyls 4"
	},	{
		name: "Bubblegum Dreams",
		link: "images/lanterns.jpg",
		title: "Bubblegum Dreams"
	}
]



const HTMLcode1 = []

for (let i=0; i < imageData.length; i++){
	
	HTMLcode1.push(`<div class="card"><img class="single" title="${imageData[i].title}" src="${imageData[i].link}" alt="${imageData[i].name}">
	<div class="title">"${imageData[i].name}"</div><span>Thumbnail</span>
</div>`)
};

gallery.innerHTML = HTMLcode1.join(' ');

const single = document.querySelectorAll(".single");

for(let j=0; j<single.length; j++){

single[j].addEventListener('click', open);

}

function open(){
	model.innerHTML=`	<h2>${this.title}</h2>
	<span id="close">&times;</span>
	<img src="${this.src}" alt="${this.title}">`
	
	document.getElementById('close').addEventListener('click', close);
}

function close() {
	model.innerHTML= ` `;
}