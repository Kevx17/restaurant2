function home() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    let title = document.createElement('h3');
    title.innerHTML = "Welcome to the Twilight Tavern Adventurer";
    
    let text = document.createElement('p')
    text.innerHTML = "Here in the twilight tavern passers by get a somwaht safe abd cosy space to breathe a bit rent a bed and/or get something nice to eat and drink. we know you have a long path behing you and probably a long path to go infront of you as well so while you're here we try our best to make your stay comfortable so take a little break and be our guest! <br><br>  Have a nice stay!";
    
    content.appendChild(title);
    content.appendChild(text); 
}

export default home;