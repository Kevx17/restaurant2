function contact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    let container = document.createElement('div');
    container.id = "contact";
    let h2  = document.createElement('h2');
    h2.innerHTML = "if you have any questions, problems, or feedback please let us know!"
    let form = document.createElement('form');
    let message = document.createElement('textarea');
    let submit = document.createElement('input')
    submit.type = "submit";

    form.appendChild(message);
    form.appendChild(submit);
    container.appendChild(h2);
    container.appendChild(form);
    content.appendChild(container);

}

export default contact;