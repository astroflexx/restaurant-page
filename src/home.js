import Pizza from './pizza.jpg';

function home() {
    const div = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = `The Pizza Bakery`;

    // const img = document.createElement('img');
    // img.setAttribute('src', './pizza.jpg');
    // img.setAttribute('alt', 'Pizza');
    // img.style.height = '500px';
    // img.style.width = '700px';

    const img = new Image();
    img.src = Pizza;
    img.alt = `Pizza`;
    img.height = '500';
    img.width = '600';

    const p = document.createElement('p');
    p.textContent = `Our restaurant is the best. We offer good food at low prices. We serve the best quality and fresh food
                prepared on demand. Some filler text because I dont know what to write here. blah blah blah and some
                more blah blah blah. here take more text enjoy it. if somebody is reading this, I hope you have a good day :)`;

    div.appendChild(header); 
    div.appendChild(img); 
    div.appendChild(p);
}

export default home;