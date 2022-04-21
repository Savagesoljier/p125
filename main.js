song="";
leftWristX=0;
LeftWristY=0;
rightWristX=0;
rightWristY=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.hide();

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX= "+leftWristX+"leftWristY= "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX= "+rightWristX+"rightWristY= "+rightWristY);
    }
}

function draw(){
    background('#4287f5');
    image(video,0,0,600,500);
}

function play(){
song.play();
song.setVolume(1);
song.rate(1);
}

