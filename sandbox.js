const selectMenu = document.getElementById('states');
const postcardDiv = document.getElementById('postcard');
const stateHeading = document.getElementById('state-heading');
const greeting = document.getElementById('greeting')

// Add event listener here
selectMenu.addEventListener("change", changeState);

function changeState(){
    let stateValue = selectMenu.value;
    greeting.innerHTML = "GREETINGS FROM";
    postcardDiv.style.backgroundImage = "url('img/" + stateValue + "@2x.jpg')";
}