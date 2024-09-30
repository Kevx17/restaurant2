function menu() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    let btns = document.createElement("div");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button"); 
    let menu = document.createElement("div");

    btns.id = "btns"
    btns.appendChild(btn1);
    btns.appendChild(btn2);
    btn1.innerHTML = "Food"
    btn1.id = "food"
    btn2.innerHTML = "Drinks"
    btn2.id = "drinks"
    menu.id = "menu"

    content.appendChild(btns);
    content.appendChild(menu);
    document.getElementById("food").onclick = food;
    document.getElementById("drinks").onclick = drinks;
    food();
}

function food() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";


    let container1 = document.createElement("div");
    let container2 = document.createElement("div");
    let container3 = document.createElement("div");
    let container4 = document.createElement("div");

    container1.id  = "container1"
    container2.id  = "container2"
    container3.id  = "container3"
    container4.id  = "container4"

    let description1 = document.createElement("div");
    let description2 = document.createElement("div");
    let description3 = document.createElement("div");
    let description4 = document.createElement("div");

    let text1 = document.createElement("h3")
    text1.innerHTML = "Blackened Serpent Stew";
    let text2 = document.createElement("h3")
    text2.innerHTML = "Inferno Boar Roast";
    let text3 = document.createElement("h3")
    text3.innerHTML = " Crimson Kraken Risotto";
    let text4 = document.createElement("h3")
    text4.innerHTML = " Moonshadow Pheasant Pie";

    let p1 = document.createElement("p")
    p1.innerHTML = "A dark stew made from shadow serpent meat, venomous mushrooms, and bloodroot, with a smoky, spicy flavor.";
    let p2 = document.createElement("p")
    p2.innerHTML = "Fire-roasted boar from cursed lands, marinated in dragon’s blood chili sauce, served with midnight potatoes.";
    let p3 = document.createElement("p")
    p3.innerHTML = "A black-crusted pie filled with eclipse-hunted pheasant, nightshade berries, and shadow mushrooms.";
    let p4 = document.createElement("p")
    p4.innerHTML = "Blood-red risotto with kraken flesh and squid ink, offering a briny, eerie taste from the deep sea.";

    let pic1 = document.createElement("img");
    pic1.src = "meal.webp";
    let pic2 = document.createElement("img");
    pic2.src = "meal.webp";
    let pic3 = document.createElement("img");
    pic3.src = "meal.webp";
    let pic4 = document.createElement("img");
    pic4.src = "meal.webp";


    description1.appendChild(text1);
    description1.appendChild(p1);
    container1.appendChild(description1);
    container1.appendChild(pic1);

    description2.appendChild(text2);
    description2.appendChild(p2);
    container2.appendChild(description2);
    container2.appendChild(pic2);

    description3.appendChild(text3);
    description3.appendChild(p3);
    container3.appendChild(description3);
    container3.appendChild(pic3);

    description4.appendChild(text4);
    description4.appendChild(p4);
    container4.appendChild(description4);
    container4.appendChild(pic4);


    menu.appendChild(container1);
    menu.appendChild(container2);
    menu.appendChild(container3);
    menu.appendChild(container4);


}

function drinks() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";


    let container1 = document.createElement("div");
    let container2 = document.createElement("div");
    let container3 = document.createElement("div");
    let container4 = document.createElement("div");

    container1.id  = "container1"
    container2.id  = "container2"
    container3.id  = "container3"
    container4.id  = "container4"

    let description1 = document.createElement("div");
    let description2 = document.createElement("div");
    let description3 = document.createElement("div");
    let description4 = document.createElement("div");

    let text1 = document.createElement("h3")
    text1.innerHTML = "Nightshade Elixir";
    let text2 = document.createElement("h3")
    text2.innerHTML = "Beer of the Hill";
    let text3 = document.createElement("h3")
    text3.innerHTML = "Spectral Wine";
    let text4 = document.createElement("h3")
    text4.innerHTML = "Blackfire Mead";

    let p1 = document.createElement("p")
    p1.innerHTML = "A shimmering, dark purple drink made from distilled nightshade berries and enchanted by a moonlit ritual. It’s both poisonous and intoxicating, providing heightened senses before a deep sleep—or worse.";
    let p2 = document.createElement("p")
    p2.innerHTML = "Good qulity beer!";
    let p3 = document.createElement("p")
    p3.innerHTML = "A translucent, silvery wine said to be made from grapes harvested under the full moon in cursed vineyards. Drinking it allows you to glimpse the spirits of the dead, though few can handle the visions for long.";
    let p4 = document.createElement("p")
    p4.innerHTML = "A honeyed mead infused with dragonfire peppers and ghostflower nectar. It burns as it goes down, leaving a trail of heat and the faint glow of embers in the drinker's eyes.";

    let pic1 = document.createElement("img");
    pic1.src = "drink.webp";
    let pic2 = document.createElement("img");
    pic2.src = "drink.webp";
    let pic3 = document.createElement("img");
    pic3.src = "drink.webp";
    let pic4 = document.createElement("img");
    pic4.src = "drink.webp";


    description1.appendChild(text1);
    description1.appendChild(p1);
    container1.appendChild(description1);
    container1.appendChild(pic1);

    description2.appendChild(text2);
    description2.appendChild(p2);
    container2.appendChild(description2);
    container2.appendChild(pic2);

    description3.appendChild(text3);
    description3.appendChild(p3);
    container3.appendChild(description3);
    container3.appendChild(pic3);

    description4.appendChild(text4);
    description4.appendChild(p4);
    container4.appendChild(description4);
    container4.appendChild(pic4);


    menu.appendChild(container1);
    menu.appendChild(container2);
    menu.appendChild(container3);
    menu.appendChild(container4);


}

export default menu;