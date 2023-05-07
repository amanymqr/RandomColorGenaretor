

let
    myBtn = document.querySelector(".random-btn-color"),
    hexaInput = document.querySelector("#text-hexa"),
    paintBox = document.querySelector(".colorBox");

const randomColor = () => {
    let r = Math.random() * 255 // Generate a random value for red (0-255)
    let g = Math.random() * 255
    let b = Math.random() * 255
    // The Math.random() function generates a random number between 0 (inclusive) and 1 (exclusive). By multiplying the result by 255, we can map the random value to the range of [0, 255], which is the range of possible values for each of the red, green, and blue components of a color in the RGB color model.


    let hexaColor = `#${parseInt(r).toString(16)}${parseInt(g).toString(16)}${parseInt(b).toString(16)}`

    // parseInt(r).toString(16) converts the integer to a string in base-16 (hexadecimal) format.

    // if r is 120, g is 200, and b is 50, the resulting hexaColor variable would be #78C832,

    // By passing the argument 16 to the toString() method, we are telling it to convert the number to a string in base-16 (hexadecimal) format
    hexaInput.value = hexaColor;
    paintBox.style.backgroundColor = hexaColor;

}

// the first event for random color
myBtn.addEventListener('click', randomColor)

// the second event for input color 
hexaInput.addEventListener('keyup', () => {
    paintBox.style.backgroundColor = hexaInput.value;
})

var colorint;
paintBox.addEventListener('mouseover', () => {
    colorint = setInterval(randomColor, 500)
}
)
paintBox.addEventListener('mouseout', () => {
    clearInterval(colorint)
})