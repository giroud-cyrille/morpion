let cross = false;
let touches;
let actualPlayer = "X";
let firstTeam = 0, secondTeam = 0;

$(document).ready(function() {
    touches = $(".touche");
    touches.click(onClick);
});

function onClick()
{
    if(this.innerHTML.length != 0) {
        alert("Cet case est déjà prise ! Séléctionner en une autre");
        return;
    }

    if(cross) {
        $(this).html('X');
    }
    else {
        $(this).html('O');
    }

    if(!checkWin() && touches.toArray().every( (val, i, arr) => val.innerHTML == 'X' || val.innerHTML == 'O')) {
        alert('Match nul');
        clear();
    }

    cross = !cross;
    actualPlayer = cross ? "X" : "O";
}

function checkWin()
{
    if(areEqualsAtIndex(0, 1, 2) || areEqualsAtIndex(0, 3, 6) || 
       areEqualsAtIndex(3, 4, 5) || areEqualsAtIndex(6, 7, 8) || 
       areEqualsAtIndex(2, 5, 8) || areEqualsAtIndex(0, 4, 8) || 
       areEqualsAtIndex(2, 4, 6) || areEqualsAtIndex(1,4,7)) {

        alert("Le joueur " + actualPlayer + " a gagné");
        cross ? ++firstTeam : ++secondTeam;

        clear();
        $('.score').html(firstTeam);
        $('.score1').html(secondTeam);

        return true;
    }

    return false;
}

function areEqualsAtIndex(i1, i2, i3) {
    if(touches[i1].innerHTML == actualPlayer && touches[i2].innerHTML == actualPlayer && touches[i3].innerHTML == actualPlayer)
        return true;
    else
        return false;
}

function reset() {
    firstTeam = 0;
    secondTeam = 0;

    clear();
    $('.score').html(firstTeam);
    $('.score1').html(secondTeam);
}

function clear() {
    for(let i = 0; i < touches.length; i++) {
        touches[i].innerHTML = '';
    }
}