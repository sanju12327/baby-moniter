objects = [];
video = "";
status="";

function preload()
{
    alarm = createAudio("alarm.mp3");
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() 
{
    image(video, 0, 0, 480, 380); 
    if(status != "") 
    { objectDetector.detect(video, gotResult); 
    for (i = 0; i < objects.length; i++) 
    { 
        if(objects[i].label == "person")
        {
    document.getElementById("status").innerHTML = "Status : Object Detected"; 
    document.getElementById("baby_status").innerHTML = "Baby Found"; 
    alarm.stop();
} else {
    document.getElementById("baby_status").innerHTML = "Baby Not Found";
    alarm.play();
} 
} }


function modelLoaded()
{
    status = true;
    console.log("Model Loaded!");
    video.loop();
    video.speed(1);
    video.volume(1);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    objects = results;
    console.log(results);
}}