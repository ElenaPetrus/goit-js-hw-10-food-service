const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const refs = {
    body:document.querySelector('body'),
    switchInput:document.querySelector('#theme-switch-toggle')
}
// console.log(refs.switchInput)

  refs.switchInput.addEventListener('change', changeSwitchInput);
  refs.switchInput.addEventListener('change', locateTheme); 

  function setDefaultTheme(){
        if  (localStorage.getItem('theme') === null){
        refs.body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
        }
    };
 setDefaultTheme();

  function changeSwitchInput(e) {
    if (e.currentTarget.checked){
        return switchOnDarkTheme(e);
        }else {
        return switchOnLightTheme(e);
        }
    };

    function switchOnDarkTheme(e){
        refs.body.classList.add(Theme.DARK);
        e.currentTarget.checked = true
    };

    function switchOnLightTheme(e){
        refs.body.classList.replace(Theme.DARK, Theme.LIGHT)
        e.currentTarget.checked = false
        };


    function locateTheme (e){
        if (e.currentTarget.checked){
          localStorage.setItem('theme', Theme.DARK);
          } else {
          localStorage.removeItem('theme');
          localStorage.setItem('theme', Theme.LIGHT);
          }
      };
     
    function currentThemeCheck() {
        if (localStorage.getItem('theme') === Theme.DARK) {
          refs.body.classList.add(Theme.DARK);
          refs.switchInput.checked = true;
        }
       }
       currentThemeCheck();