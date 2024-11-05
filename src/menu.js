export function display(){ 
    let content = document.querySelector("#content");
    content.textContent = '';

    content.classList.remove("home");
    
    let ul = document.createElement("ul");
    ul.classList.add("menu");

    const dishes = [
        { name: "Lasagna alla Bolognese", price: "$14.99",
            img: `https://images.pexels.com/photos/5949893/pexels-photo-5949893.jpeg?auto=compress&cs=tinysrgb&w=1200`},
        { name: "Margherita Pizza", price: "$12.49",
            img: `https://images.pexels.com/photos/19968430/pexels-photo-19968430/free-photo-of-pizzas-and-silverware.jpeg?auto=compress&cs=tinysrgb&w=1200` },
        { name: "Penne Arrabbiata", price: "$13.00",
            img: `https://images.pexels.com/photos/5419344/pexels-photo-5419344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2` },
        { name: "Spaghetti Carbonara", price: "$13.50",
            img: `https://images.pexels.com/photos/4518833/pexels-photo-4518833.jpeg?auto=compress&cs=tinysrgb&w=1200`},
        { name: "Fettuccine Alfredo", price: "$12.99",
            img: `https://images.pexels.com/photos/10350293/pexels-photo-10350293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`},
        { name: "Caprese Salad", price: "$11.00",
            img: `https://images.pexels.com/photos/2787672/pexels-photo-2787672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2` }
    ];

    for(let i = 0; i<dishes.length; i++){
        let li = document.createElement("li");
        
        let img = document.createElement("div");
        img.className = "img";
        img.style.backgroundImage = `url('${dishes[i].img})`;
        
        let dish = document.createElement("div");
        dish.textContent = dishes[i].name;

        let price = document.createElement("div");
        price.textContent = dishes[i].price;

        li.append(img,dish,price);
        ul.append(li);
    }

    content.append(ul);
}