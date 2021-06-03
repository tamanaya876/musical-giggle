img = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(550,420);
    canvas.center();
}

function draw()
{
    image(img,0,0,550,420);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
}