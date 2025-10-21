let movies = document.getElementById('movie-list')
let timing = document.getElementById('movie-time')

let ticketCount = document.getElementById('ticket-count') // how many tkt
let bookBtn = document.getElementById('book-btn')
bookBtn.addEventListener("click", () => {

    let MovieOptions = movies.options[movies.selectedIndex]
    let movieName = MovieOptions.text // movie name
    let ticketAmount = MovieOptions.value // ticket price
    let timeOptions = timing.options[timing.selectedIndex]
    let movieTime = timeOptions.value // movie timing

    if(ticketCount.value == 0 || MovieOptions.text == "--Select option--" || timeOptions.value == "--Select option--"){
        alert("Enter Correct Details")
    }
    else if(ticketCount.value >=11){
        alert("Only 10 Tickets can able to Book")
    }
    else{
        console.log("movie name",movieName);
    console.log("movie ticket price",ticketAmount);
    console.log("movie timing",movieTime);
    console.log("How many persons",ticketCount.value);
    console.log("total amount of ", ticketCount.value, "people is ", ticketAmount * ticketCount.value);

    // booking confirm page

    let confirmBookingPage = document.getElementById('confirm-booking')
    confirmBookingPage.style.display = "block"
    confirmBookingPage.innerHTML = `
        <div>
        <h1>Movie Ticket Conformation</h1>
            <table>
                <tr>
                    <td><p>Movie name :</p></td>
                    <td><h3>${movieName}</h3></td>
                </tr>
                <tr>
                    <td><p>Ticket price :</p></td>
                    <td><p>₹${ticketAmount}</p></td>
                </tr>
                <tr>
                    <td><p>Total person :</p></td>
                    <td><p>${ticketCount.value}</p></td>
                </tr>
                <tr>
                    <td><p>Booking Slot :</p></td>
                    <td><p>${movieTime}</p></td>
                </tr>
                <tr>
                    <td><p>Total price :</p></td>
                    <td><h3>₹${ticketAmount * ticketCount.value}</h3></td>
                </tr>
            </table>
            <button>Edit</button>
            <div class="payment">
                <p>Payment through</p>
                <button>UPI</button>
                <button>Credit Cart</button>
                <button>Cash</button>
            </div>
        </div>
    `
    }
})