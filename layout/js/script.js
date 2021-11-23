const container = document.querySelector('.root');
const source = document.querySelector('#card').innerHTML.trim();
const template = Handlebars.compile(source);

const laptops = [{
        size: 'S',
        color: "white",
        price: 28.00,
        release_date: 2015,
        name: 'CAMISETA MESCLA',
        img: "imagens/img_2.png",
        descr: "até 3x de R$ 9,33"
    },
    {
        size: 'S',
        color: "gray",
        price: 398.00,
        release_date: 2016,
        name: 'SAIA EM COURO',
        img: "imagens/img_3.png",
        descr: "até 5x R$ 30,00"
    },
    {
        size: 'S',
        color: "black",
        price: 398.00,
        release_date: 2017,
        name: 'CARDIGAN TIGRE',
        img: "imagens/img_4.png",
        descr: "até 5x r$ 30,00"
    },
    {
        size: 'M',
        color: "white",
        price: 99.90,
        release_date: 2015,
        name: 'CARDIGAN OFF WHITE',
        img: "imagens/img_5.png",
        descr: "até 3x r$ 33,30"
    },
    {
        size: 'M',
        color: "gray",
        price: 129.90,
        release_date: 2016,
        name: 'BODY LEOPARDO',
        img: "imagens/img_6.png",
        descr: "até 3x r$ 43,43"
    },
    {
        size: 'M',
        color: "black",
        price: 398.00,
        release_date: 2017,
        name: 'CASACO PELOS',
        img: "imagens/img_7.png",
        descr: "até 5x r$ 30,00"
    },
    {
        size: 'L',
        color: "white",
        price: 120.00,
        release_date: 2015,
        name: 'CROPPED STRIPES',
        img: "imagens/img_8.png",
        descr: "até 3x r$ 40,00"
    },
    {
        size: 'L',
        color: "gray",
        price: 298.00,
        release_date: 2016,
        name: 'CAMISA TRANSPARENTE',
        img: "imagens/img_9.png",
        descr: "até 5x r$ 30,00"
    },
    {
        size: 'L',
        color: "black",
        price: 99.00,
        release_date: 2017,
        name: 'POCHETE CLUTCH',
        img: "imagens/img_10.png",
        descr: "até 3x r$ 33,00"
    }
];

let btn = document.querySelector(".submit");
let reset = document.querySelector(".reset");

// let createFilteredCards = ({ size, color, price }) => {
//   let filters = [];
//   filters = filters.concat(size, color, price);
//   let filteredCards = laptops.filter(elem =>
//     Object.values(elem).some(el => filters.includes(el))
//   );  

//   render(filteredCards);
// };


let createFilteredCards = (obj) => {
    let filters = obj;
    let filteredCards = laptops.filter(elem => {
        let includeColor = true;
        let includeSize = true;
        let includePrice = true;

        if (filters.color.length != 0) {
            includeColor = filters.color.includes(elem.color);
        };
        if (filters.size.length != 0) {
            includeSize = filters.size.includes(elem.size);
        };
        if (filters.price.length != 0) {
            includePrice = filters.price.includes(elem.price);
        };
        return includeColor && includeSize && includePrice;
    })
    render(filteredCards);
};


let render = (arr) => {
    const markup = arr.reduce((acc, item) => acc + template(item), '');
    container.innerHTML = markup;

};

btn.addEventListener("click", e => {
    e.preventDefault();
    const filter = { size: [], color: [], price: [] };
    const nameArray = document.querySelectorAll('input[type="checkbox"]:checked');

    let checkedList = Array.from(nameArray);

    checkedList.forEach(elem => {
        if (elem.name == "size") {
            filter.size.push(elem.value);
        } else if (elem.name == "color") {
            filter.color.push(elem.value);
        } else if (elem.name == "price") {
            filter.price.push(+elem.value);
        }
    });

    createFilteredCards(filter);
});

reset.addEventListener("click", e => {
    let arr = [...laptops];
    render(arr);
});

document.addEventListener("DOMContentLoaded", function() {
    let arr = [...laptops];
    render(arr);
});