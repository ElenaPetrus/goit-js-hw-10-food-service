import './sass/main.scss';
import './js/menu.js';
import './js/theme.js';



// Вариант 1
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// refs.switchInput.addEventListener('change', changeSwitchInput);
// refs.switchInput.addEventListener('change', locateTheme); 

// function setDefaultTheme(){
//       if  (localStorage.getItem('theme') === null){
//       refs.body.classList.add(Theme.LIGHT);
//       localStorage.setItem('theme', Theme.LIGHT);
//       }
//   };
// setDefaultTheme();

// function changeSwitchInput(e) {
//   if (e.currentTarget.checked){
//       return switchOnDarkTheme(e);
//       }else {
//       return switchOnLightTheme(e);
//       }
//   };
    // function switchOnDarkTheme(e){
    //   refs.body.classList.add(Theme.DARK);
    //   refs.body.classList.remove(Theme.LIGHT);
    //   e.currentTarget.checked = true
    //   localStorage.setItem('theme', Theme.DARK);
    //   }
  
    //   function switchOnLightTheme(e){
    //     refs.body.classList.add(Theme.LIGHT);
    //     refs.body.classList.remove(Theme.DARK);
    //     e.currentTarget.checked = false
    //     localStorage.removeItem('theme');
    //     localStorage.setItem('theme', Theme.LIGHT);
    //     }
  
    //     function currentThemeCheck() {
    //       if (localStorage.getItem('theme') === Theme.DARK) {
    //         refs.body.classList.add(Theme.DARK);
    //         refs.switchInput.checked = true;
    //       }
    //      }
    //      currentThemeCheck();
   
  