function sayThatWasEasy()
{
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$("#highNoon").on("click", sayThatWasEasy);
$(document).keypress(delegateKeypress);

function delegateKeypress(event)
{
    if (event.charCode == 32)
    {
        $("#highNoon").trigger("click");
    }
}