function menu() {
    const div = document.querySelector('#content');

    const appetizers = document.createElement('h1');
    const pizzas = document.createElement('h1');
    const desserts = document.createElement('h1');

    appetizers.textContent = 'Appetizers';
    pizzas.textContent = 'Pizzas';
    desserts.textContent = 'Desserts';

    const list1 = document.createElement('ul');
    const list2 = document.createElement('ul');
    const list3 = document.createElement('ul');

    const l1 = document.createElement('li');
    const l2 = document.createElement('li');
    const l3 = document.createElement('li');
    const l4 = document.createElement('li');
    const l5 = document.createElement('li');
    const l6 = document.createElement('li');
    const l7 = document.createElement('li');
    const l8 = document.createElement('li');
    const l9 = document.createElement('li');

    l1.textContent = 'French Fries';
    l2.textContent = 'Garlic Bread';
    l3.textContent = 'Cheese Breadsticks';
    l4.textContent = 'Margherita';
    l5.textContent = 'Pepperoni';
    l6.textContent = 'Extravaganza';
    l7.textContent = 'Brownies';
    l8.textContent = 'Cheesecake';
    l9.textContent = 'Tiramisu';

    list1.appendChild(l1);
    list1.appendChild(l2);
    list1.appendChild(l3);
    list2.appendChild(l4);
    list2.appendChild(l5);
    list2.appendChild(l6);
    list3.appendChild(l7);
    list3.appendChild(l8);
    list3.appendChild(l9);

    div.appendChild(appetizers);
    div.appendChild(list1);
    div.appendChild(pizzas);
    div.appendChild(list2);
    div.appendChild(desserts);
    div.appendChild(list3);
}

export default menu;