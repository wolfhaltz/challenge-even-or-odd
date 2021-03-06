// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// const oddOrEven = e => e % 2 == 0;

// let result = numbers.map(oddOrEven);

// console.log(result);


function oddOrEven(){

    var number = document.getElementById('oddOrEven').value;
    var optionOdd = document.getElementsByClassName('option--odd');
    var optionEven = document.getElementsByClassName('option--even');

    console.log(number)

    if( number % 2 == 0){
        optionOdd[0].classList.remove('d-block');
        optionEven[0].classList.add('d-block');
    }else{
        optionEven[0].classList.remove('d-block');
        optionOdd[0].classList.add('d-block');
    }

}


/* MODALS */
var modalOdd = document.getElementById("modalOdd");
var btnOdd = document.getElementById("modalBtnOdd");

btnOdd.onclick = function() {
    modalOdd.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalOdd) {
        modalOdd.style.display = "none";
    }
}