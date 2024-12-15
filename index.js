//gets the time and date
function updateTime() {
    const curr = new Date();
    let hours = curr.getHours();
    let mins = curr.getMinutes();
    let month = curr.getMonth() + 1;
    let day = curr.getDate();
    let amOrPm = "AM";

    if (hours > 12) { // formatting for hrs
        hours-= 12;
        amOrPm = "PM";
    }
    mins = mins < 10 ? '0' + mins : mins; // formatting for minutes

    const timeAsString = `${month}/${day}/1999 ${hours}:${mins}` + " " + amOrPm; // create string for the time
    document.getElementById("time").innerHTML = timeAsString; // display the string
}

setInterval(updateTime, 1000); // update time
updateTime(); // run fct immediately!