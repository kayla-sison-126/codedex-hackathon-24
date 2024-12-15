// get the time and date ----------------------------------------------------
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
    } else if (hours == 0) { // for 12 am
        hours = 12;
        amOrPm = "AM";
    }
    mins = mins < 10 ? '0' + mins : mins; // formatting for minutes

    const timeAsString = `${month}/${day}/1999 ${hours}:${mins}` + " " + amOrPm; // create string for the time
    document.getElementById("time").innerHTML = timeAsString; // display the string
}

setInterval(updateTime, 1000); // update time
updateTime(); // run fct immediately!


// rainbow text ---------------------------------------------------
const rainbowText = document.getElementById("rainbow-text");
const rainbowColors = ["red", "orange", "yellow", "limegreen", "blue", "blueviolet"];
let colorIndex = 0;

function animateRainbow() {
    rainbowText.style.color = rainbowColors[colorIndex];
    colorIndex = (colorIndex+1) % rainbowColors.length;
}

setInterval(animateRainbow, 500);