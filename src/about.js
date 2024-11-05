export function display(){ 
    let content = document.querySelector("#content");
    content.textContent = '';
    content.classList.remove("home");
    content.classList.add("about");

    let icon = document.createElement("div");
    icon.className = "icon";

    let p1 = document.createElement("p");
    p1.textContent = "Welcome to Firenze, a place where traditional Italian flavors meet modern culinary artistry. Nestled in the heart of the city, we are passionate about bringing you an authentic Italian dining experience with a contemporary twist."

    let p2 = document.createElement("p");
    p2.textContent = "Our chefs carefully craft every dish using the finest, locally-sourced ingredients. From our hand-made pastas to our wood-fired pizzas, every meal is prepared with love and dedication, paying homage to the rich culinary heritage of Italy."

    let p3 = document.createElement("p");
    p3.textContent = "Our mission is to bring a taste of Italy to you - serving up exceptional dishes made from the highest quality ingredients, paired with a warm, friendly atmosphere that feels like family. We want every guest to leave with a smile and the satisfaction of a truly memorable meal.";
    
    let p4 = document.createElement("p");
    p4.innerHTML = "Contact :- 979848489x<br> Office Hours: Mon - Fri 9:30am - 5:30pm<br> Email Address: kate@firenze.com";
    

    content.append(icon,p1,p2,p3,p4);
}