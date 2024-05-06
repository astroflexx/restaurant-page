function contact() {
    const div = document.querySelector('#content');

    const ceo = document.createElement('h1');
    const manager = document.createElement('h1');
    const chef = document.createElement('h1');

    ceo.textContent = 'CEO';
    manager.textContent = 'Manager';
    chef.textContent = 'Chef';

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

    l1.textContent = 'Cranjis McBasketball';
    l2.textContent = '69420-69420';
    l3.textContent = 'iaintreadingyouremailLOL@gmail.com';
    l4.textContent = 'Jabreakit Jubawdit';
    l5.textContent = '5318008';
    l6.textContent = 'yesthatsmyrealnamemaam@gmail.com';
    l7.textContent = 'Eetwont Flush';
    l8.textContent = '73398-11001';
    l9.textContent = 'detectiveblutomindpretzel@gmail.com';

    list1.appendChild(l1);
    list1.appendChild(l2);
    list1.appendChild(l3);
    list2.appendChild(l4);
    list2.appendChild(l5);
    list2.appendChild(l6);
    list3.appendChild(l7);
    list3.appendChild(l8);
    list3.appendChild(l9);

    div.appendChild(ceo);
    div.appendChild(list1);
    div.appendChild(manager);
    div.appendChild(list2);
    div.appendChild(chef);
    div.appendChild(list3);
}

export default contact;