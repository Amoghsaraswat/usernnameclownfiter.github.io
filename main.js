nosex=0;
nosey=0;
function preload() {
    clownNose=loadImage("https://i.postimg.cc/WpmJtqMG/clownnose.png");
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw() {
image(video,0,0,300,300);
    image(clownNose,nosex,nosey,30,30);
}
function snapshot() {
    save("Amogh.png");
}
function modelLoaded() {
    console.log("pose net is loaded");
}
function gotPoses(results)
{
if(results.length>0) {
 console.log(results);
    nosex=results[0].pose.nose.x-15;
    nosey=results[0].pose.nose.y-15;
}
}