

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    const container = document.querySelector(".container");

    products.forEach(items => {
        const productDisplay = document.createElement("div")
        items.className = "productDisplay"

        const list = document.createElement('p')

        list.innerText = `${items.name}: ${items.price} Description: ${items.description}`
        productDisplay.appendChild(list);

        container.appendChild(productDisplay);
    })


}
// displayProducts(products);
document.addEventListener('DOMContentLoaded', displayProducts)

function handleSubmit(event){
    event.preventDefault();
    
    const formElements = event.target.elements;
    const userInfo = [];
    for (let element of formElements){
        if (element.checked){
            userInfo.push(element.value)
        }
    }

    
    const data = {
        name: formElements.name.value,
        email: formElements.email.value,
        message: formElements.message.value,
    }
    console.log(data);
    event.target.reset();
}

// function handleSubmit(event){
//     event.preventDefault();
//     console.log('Inputs', event.target.elements.name.value)
//     console.log('Inputs', event.target.elements.email.value)
//     console.log('Inputs', event.target.elements.message.value)
//     event.target.reset();

// }

function changeColor() {
    document.getElementById('box').style.backgroundColor = randomColors();
}

function mouseOver() {
    document.getElementById('box-2').style.backgroundColor = randomColors();
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));