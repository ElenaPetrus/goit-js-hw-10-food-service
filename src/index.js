import './sass/main.scss'
import menuListTpl from './templates/menu-items.hbs'
import menuData from './menu.json';
// console.table(menuData);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menuList:document.querySelector('.js-menu'),
    body:document.querySelector('body'),
    switchInput:document.querySelector('.theme-switch-toggle')
}

const  MenuListMarkup  = createMenuListMarkup (menuData);
refs.menuList.insertAdjacentHTML("beforeend", MenuListMarkup);

function createMenuListMarkup (menuData){
    return  menuData.map (menuItem => menuListTpl(menuItem)).join ('');
  }

  refs.switchInput.addEventListener('change', changeSwitchInput);

  function changeSwitchInput(event) {
    if (e.currentTarget.checked){
      return switchOnDarkTheme(e);
      }else {
      return switchOnLightTheme(e);
      }
    }
 
    function switchOnDarkTheme(e){
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    e.currentTarget.checked = true
    }

    function switchOnLightTheme(e){
      refs.body.classList.add(Theme.LIGHT);
      refs.body.classList.remove(Theme.DARK);
      e.currentTarget.checked = false
      }
    
  