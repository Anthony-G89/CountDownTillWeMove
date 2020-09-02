function countDown () {
    var today = new Date();

    var eventDate = new Date("September 27, 2020 00:00:00");
    

    var currentDate = today.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentDate;

    var sec = Math.floor(remTime / 1000);
    var min = Math.floor( sec / 60);
    var hrs = Math.floor(min / 60);
    var days = Math.floor(hrs / 24);


    hrs = hrs % 24;
    min%=60;
    sec%=60;

    hrs = (hrs<10) ? "0"+ hrs : hrs;
    min = (min<10) ? "0" + min : min;
    sec = (sec<10) ? "0" + sec : sec;


    document.getElementById("days").innerHTML = days ;
    document.getElementById("hours").innerHTML = hrs ;
    document.getElementById("mintues").innerHTML = min ;
    document.getElementById("seconds").innerHTML = sec ;

    setTimeout(countDown, 1000)
}

countDown();