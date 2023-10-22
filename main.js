lwX=0;
rwX=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#69C9A7');
    document.getElementById("font_size").innerHTML="The font size "+difference+" px";
    
    textSize(difference);
    fill("red");
    text('Font Manipulator',50,400);
    
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if (results.length > 0) 
    {
        console.log(results);
       

        lwX=results[0].pose.leftWrist.x;
        rwX=results[0].pose.rightWrist.x;

        difference=Math.floor(lwX-rwX);

    }
}