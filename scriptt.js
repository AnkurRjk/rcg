//generae RGB every time
//click on button for change
//change every time on click
//new colour every time
//chabge colour on click

const genNewRGBColors = () => {
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)

    const rgb = "rgb(" + r + "," + g + "," + b + ")";
    changeBackgroundColor(rgb);
};

const changeBackgroundColor = (rgb) => {
    document.querySelector("body").style.backgroundColor = rgb;
};

const button = document
    .querySelector("button")
    .addEventListener("click", genNewRGBColors);
