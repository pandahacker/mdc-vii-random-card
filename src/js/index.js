import $ from "jquery";
import 'bootstrap'; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import '../style/style.css';

var cards = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];

function randomCard(){

    var cardNumber = String(cards[Math.floor(Math.random() * (cards.length - 1))]);
    var cardSuit = Math.floor((Math.random() * 4) + 1);

    switch(cardSuit){
        case 1:
            var suit = document.querySelector('.suit');
            for(var i=0;i<suit.length;i++){
                suit[i].innerHTML = cardNumber+"&hearts;";
            }
           
//            document.getElementById('suitBottom').innerHTML = cardNumber+"&hearts;";
            document.getElementById('card').classList.add('red');
            break;
        case 2:
            document.getElementById('suitTop').innerHTML = cardNumber+"&diams;";
            document.getElementById('suitBottom').innerHTML = cardNumber+"&diams;";
            document.getElementById('card').classList.add('red');
            break;
        case 3:
            document.getElementById('suitTop').innerHTML = cardNumber+"&spades;";
            document.getElementById('suitBottom').innerHTML = cardNumber+"&spades;";
            document.getElementById('card').classList.add('black');
            break;
        case 4:
            document.getElementById('suitTop').innerHTML = cardNumber+"&clubs;";
            document.getElementById('suitBottom').innerHTML = cardNumber+"&clubs;";
            document.getElementById('card').classList.add('black');
            break;
    }

    document.getElementById('center').innerHTML = cardNumber;
}
window.onload = function(){
    randomCard();
};