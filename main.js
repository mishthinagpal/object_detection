function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHtML="Status : Detecting Objects";
}
img="";
status="";
objects=[];
function modelLoaded(){
    console.log("Model loaded!");
    status=true;
    objectDetector.detect(video,gotResults);
    


}
function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    objects=results;
}
}


function preload(){
    img=loadImage("th.jpeg");
}


function draw(){
    image(video,0,0,380,380);
    if(status!=""){
        r=random(150);
        g=random(150);
        b=random(150);
        objectDetector.detect(video,gotResults);
        for(i=0;i < objects.length;i++){
            document.getElementById("status").innerHTML="Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected are : " + objects.length;
            fill(r,g,b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}