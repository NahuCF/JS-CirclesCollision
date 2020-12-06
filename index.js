var viewportCenterX;
var viewportCenterY;

//Mouse position
var littleCircleX;
var littleCircleY;

function DrawBigCircle()
{
    const bigCanvas = document.getElementById('bigCircle');
    const bigContext = bigCanvas.getContext('2d');
    const bigCenterX = bigCanvas.width / 2;
    const bigCenterY = bigCanvas.height / 2;
    const bigRadius = 70;
    bigContext.beginPath();
    bigContext.arc(bigCenterX, bigCenterY, bigRadius, 0, 2 * Math.PI, false);
    bigContext.fillStyle = "green";
    bigContext.fill();
}

function DrawLitteCircle()
{
    const littleCanvas = document.getElementById('littleCircle');
    const littleContext = littleCanvas.getContext('2d');
    const littleCenterX = littleCanvas.width / 2;
    const littleCenterY = littleCanvas.height / 2;
    const littleRadius = 35;

    littleContext.beginPath();
    littleContext.arc(littleCenterX, littleCenterY, littleRadius, 0, 2 * Math.PI, false);
    littleContext.fillStyle = "blue";
    littleContext.fill();
}

function SetPosLittleCircle()
{
    let xMove = innerWidth - littleCircleX;
    document.getElementById("littleCircle").style.right = xMove - 75 + "px";

    let yMove = innerHeight - littleCircleY;
    document.getElementById("littleCircle").style.bottom = yMove - 75 + "px";
}

function IsColliding() 
{
    const disX = Math.abs(viewportCenterX - littleCircleX);
    const disY = Math.abs(viewportCenterY - littleCircleY);
    const dis = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));

    if(dis <= 105)
    {
        document.getElementById("text").style.opacity = 1;
        return true;
    }
    else
    {
        document.getElementById("text").style.opacity = 0;
        return false;
    }
}

window.addEventListener("mousemove", function(mouseObject)
{
    DrawBigCircle();
    littleCircleX = mouseObject.x;
    littleCircleY = mouseObject.y;
    viewportCenterX = innerWidth / 2;
    viewportCenterY = innerHeight / 2;
    DrawLitteCircle();
    SetPosLittleCircle();
    if(IsColliding() == true)
    {
        console.log("!COLLIDING");

        let redColor = document.getElementById("littleCircle").getContext('2d');
        redColor.fillStyle = "Red";
        redColor.fill();
    }
    else
    {
        document.getElementById("littleCircle").style.fillStyle = "Blue";
    }
});