song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
leftWristScore=0;
status_1="";
status_2="";
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas= createCanvas(500,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function draw(){
    image(video,0,0,500,500);
status_1=song1.isPlaying();
    fill("#ff0000");
    stroke("#ff0000");
if(leftWristScore>0.2){
    circle(leftWristX,rightWristY,30);
    song2.stop();
}
if(status_1 = "false"){
    song1.play();
    document.getElementById("heading").innerHTML="Song = Harry Potter Theme Song";
    
}
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristScore= results[0].pose.keypoints[9].score;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);


    }
}