
const styles = "margin-top: 50px;height: 150px;width: 150px;border-width: 1px;border-style: solid;border-radius:10px"


const changebg = () => {
	const element = document.querySelector('body')
	element.bgColor == 'grey' ? element.bgColor = 'white' : element.bgColor='grey'

}

const drawContent = () => {
	const element = document.querySelector('#content');
	element.style = styles;
	element.innerText = "Hello World";
}


const clearContent = () =>{
	const content = document.querySelector('#content');
	const body = document.querySelector('body');
	content.style = "";
	content.innerText = "";
	body.bgColor = "white";

}

// 3/3 'w0rld}'