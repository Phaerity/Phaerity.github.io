var player;

function setup()
{
    createCanvas(250, 250);
    player = createSprite(width/2, height-25, 50, 50)
}
function draw()
{
    background(0, 0, 100);
    drawSprites();
}