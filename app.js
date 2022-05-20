const seats = document.getElementById('seats')
const seat = document.querySelectorAll('.row .seat:not(.selected)');
const seatsel = document.querySelectorAll('.row .seat.selected');
let count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie-list');
let ticketPrice = parseInt(movie.value);
let seatArr = [...seat];
// console.log(seatArr)


// function updateCount() {
//     const selected = document.querySelectorAll('.row .seat.selected')
//     let selectedSeat = selected.length;
//     count.innerText = selectedSeat;
//     total.innerText = selectedSeat * ticketPrice;
    
// }
let blueArr = []

seats.addEventListener('click', (e) => {
    if(e.target.classList.contains('selected') ||
    !e.target.classList.contains('occuiped') ){
        e.target.style.backgroundColor = 'blue';
        blueArr.push(e.target)
        console.log(blueArr)
    }
})
// wanna reset all selected seats to its default

movie.addEventListener('change', e => {
    // seats.innerHTML = '<h2>sure !</h2>'
    blueArr.forEach((el) => {
        el.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
    })
    ticketPrice = e.target.value ;
    count.innerText = 0;
    total.innerText = 0;
})

seats.addEventListener('click', () => {

    count.innerText++;
    total.innerText = count.innerText * ticketPrice;
    let arr = [];
    arr.push(+count.innerText)
    console.log (arr)
    localStorage.setItem('seats', arr)
})

console.log(seatArr)