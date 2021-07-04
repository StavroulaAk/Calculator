let display = document.querySelector("#display");
let buttons = Array.from(document.querySelectorAll(".button")); // with array.from I make the HTML into an array so as to use the array functions

buttons.map(handleEvent) 
function handleEvent(button) {
    button.addEventListener("click", (e) => {
        if(e.target.textContent === "C"){
            display.textContent = "";
        } else if(e.target.textContent == "+") {
            display.textContent += add()
        }
        else if (e.target.textContent === "erase") {
            display.textContent = display.textContent.slice(0, -1)
        } else {
            display.textContent += e.target.textContent;
        }

        // console.log("clicked");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
    })
}


function add (a, b) {
	return a + b	
}
console.log(add(5, 3))

function subtract (a, b) {
	return a - b	
}
console.log(subtract(5, 3))

// function multiply (arr) {
// 	let total = 1;
// 	for(let i = 0; i < arr.length; i++){
// 		total *= arr[i]
// 	}
// 	return total
// }
function multiply(a, b){
    return a * b
}
console.log(multiply(5, 3))

function divide (a, b){
    return a / b
}
console.log(divide(5, 3))


function operate(operator, numA, numB){
    
}