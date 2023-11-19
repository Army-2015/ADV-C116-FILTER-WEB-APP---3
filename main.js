function preload(){
    moustache_filter= loadImage('https://i.postimg.cc/RFgMBZWh/mustache-png-from-pngfre-6.png');
}

function setup(){
    canvas= createCanvas(400, 400);
    canvas.position(595, 275);
    video= createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(moustache_filter, noseX, noseY, 90, 52)
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log("Model is Loaded!")
}

var noseX= "0";
var noseY= "0";

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("x position of nose is- " + results[0].pose.nose.x);
        console.log("y position of nose is- " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x -45;
        noseY = results[0].pose.nose.y +1;
    }
}