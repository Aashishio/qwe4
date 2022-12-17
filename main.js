// Song Variables ------
song1 = '';
song2 = '';
// Song Variables end ------

// X , Y of wrists --------
leftWristX = '';
leftWristY = '';
RightWristX = '';
RightWristY = '';
// X , Y of wrists end ------- 


// p5.js functions -----
function setup(){
    canvas = createCanvas(500, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function preload(){
    song2 = loadSound("music2.mp3");
    song1 = loadSound("music.mp3");
}

function draw(){
    image(video, 0, 0, 500, 350)
}

// p5.js functions end-----

function gotposes(results){
    if(results.lenght < 0) {
        console.log(results);

        leftWristX = results[0].leftWrist.x;
        leftWristY = results[0].leftWrist.y;
        rightWristX = results[0].rightWrist.x;
        rightWristX = results[0].rightWrist.y;
    }
}

function modelLoaded(){
    console.log('Model has loaded');
}

function play(){
    aa = Math.round(Math.random() * 2);
    difference = leftWristX - rightWristX;

    if(aa = 1) {
        song1.play();
    }else {
        song2.play();
    }
}