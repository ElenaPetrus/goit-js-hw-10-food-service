import menuListTpl from '../templates/menu-items.hbs';
import menuData from '../menu.json';
// console.table(menuData);

const refs = {
    menuList:document.querySelector('.js-menu')
}


const  MenuListMarkup  = createMenuListMarkup (menuData);
refs.menuList.insertAdjacentHTML("beforeend", MenuListMarkup);

function createMenuListMarkup (menuData){
    return  menuData.map (menuItem => menuListTpl(menuItem)).join ('');
  }
