//generae RGB every time
//click on button for change
//change every time on click
//new colour every time

const genNewRGBColours = () => {
    color.log(Math.floor(Math.random() * 10))

}

const button = document.querySelector('button')
    .addEventListener('click', genNewRGBColours())
