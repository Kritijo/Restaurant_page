export function display(){ 
    let content = document.querySelector("#content");
    content.textContent = '';
    content.classList.remove("about");

    content.classList.add("home");
    let img = document.createElement("div");
    img.classList.add("homeimg");

    let para = document.createElement("p");
    para.textContent = "Welcome to Firenze, where we serve delicious artisan dishes made with fresh, locally-sourced ingredients. Join us for an unforgettable dining experience filled with flavor and warmth. We can't wait to see you!";

    content.append(img,para);
}