var images=[
    {
        url:"https://static.wikia.nocookie.net/reddeadredemption/images/5/52/RDR2_Arthur_Morgan_Default.jpg/revision/latest?cb=20200602191534",
        alt:"Arthur-rdr2",
        caption: "Arthur Morgan - RDR2"
    }
];

function getRandomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

function demo(){
    document.body.style.backgroundColor = getRandomColor();
}
demo();