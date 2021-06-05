img = "";

status = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(550,370);
    canvas.center();

    objectDetection = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detection";
}

function modelLoaded()
{
    console.log('Model Loaded!');
    status = true;
    objectDetection.detect(img,gotResults);
}

function gotResults(error,results)
{    
    if(error)
    {
        console.error(error);
    }

    else
    {
        console.log(results);
    }
}

function draw()
{
    image(img,0,0,550,370);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("Cat",270,81)
    noFill();
    stroke("#FF0000");
    rect(260,70,250,350);
}