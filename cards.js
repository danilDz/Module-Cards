import {getResources} from '../services/services';

function cards(){

    //Classes (menu)

    class CreateMenu{
        constructor(src, altText, title, text, price, parent, ...clases){
            this.src = src;
            this.altText = altText;
            this.title = title;
            this.text = text;
            this.price = price;
            this.clases = clases;
            this.parent = parent;
            this.transfer = 27;
        }

        changeCurrency(){   
            this.price = this.price*this.transfer;
        }

        render(){
            const divMenuItem = document.createElement('div');
            if (this.clases.length == 0){
                this.divMenuItem = "menu__item";
                divMenuItem.classList.add(this.divMenuItem);
            } else{
                this.clases.forEach(className => divMenuItem.classList.add(className));
            }
            this.changeCurrency();
            divMenuItem.innerHTML = `
            <img src="${this.src}" alt="${this.altText}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
            
            this.parent.append(divMenuItem);
        }
    }

    const parent = document.querySelector('.menu__field .container');

    getResources('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new CreateMenu(img, altimg, title, descr, price, parent).render();
        });
    });

    // axios.get('http://localhost:3000/menu')
    // .then(data => {
    //     data.data.forEach(({img, altimg, title, descr, price}) => {
    //         new CreateMenu(img, altimg, title, descr, price, parent).render();
    //     });
    // });

    // 2-d way

    // getResources('http://localhost:3000/menu')
    // .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
    //         price = price*27;

    //         element.classList.add('menu__item');

    //         element.innerHTML = `
    //             <img src="${img}" alt="${altimg}">
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;

    //         document.querySelector('.menu__field .container').append(element);
    //     });
    // }
}

export default cards;