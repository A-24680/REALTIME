leY=0;
reY=0;
hat=""

function preload() {
    hat=loadImage('https://i.postimg.cc/3xdmzPn0/OIP-2.jpg');
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot() {
    save('MyFilterImage.png');
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function draw() {
    image(video,0,0,300,300);
    image(hat,reY,leY,100,100);

}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        reY=results[0].pose.rightEye.y-110;
        leY=results[0].pose.leftEye.y-110;
        console.log("leY="+leY);
        console.log("reY="+reY);
        
    }
}