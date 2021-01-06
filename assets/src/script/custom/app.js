
/* Count Down Date */
document.addEventListener('DOMContentLoaded',()=>{

    // Set the date we're counting down to
    var countDownDate = new Date("February 1, 2021 23:59:59").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var countDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        var countHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var countMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var countSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("countDays").innerHTML = countDays;
        document.getElementById("countHours").innerHTML = countHours;
        document.getElementById("countMinutes").innerHTML = countMinutes;
        document.getElementById("countSeconds").innerHTML = countSeconds;


        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdownArea").style.opacity = "1";
            document.getElementById("countdownArea").innerHTML = "<p>SÜRESİ DOLDU</p>";
        } else {
            document.getElementById("countdownArea").style.opacity = "1";
        }
    }, 0);


});
/* Count Down Date */