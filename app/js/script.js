let preferredTheme;

// used window.matchMedia metheod to determine user theme then change body's classlist,then addeventlistener to monitor theme change.

const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const determineThemeMode = function () {
  let curentTheme = darkThemeQuery.matches ? 'dark' : 'light';
  if (curentTheme === 'light') {
    document.querySelector('#light').checked = true;
  } else {
    document.querySelector('#dark').checked = true;
  }
  return settheme(curentTheme);
};

darkThemeQuery.addEventListener('change', function (e) {
  preferredTheme = e.matches ? 'dark' : 'light';
  determineThemeMode();
});

//modified body's className to change dark or light mode

const settheme = function (newthemecolor) {
  if (newthemecolor !== document.body.className) {
    document.body.className = newthemecolor;
  }
  let toggleText = document.querySelector('.js-toggle-text span');
  if (newthemecolor === 'dark') {
    toggleText.classList.remove('visually-hidden');
  } else {
    toggleText.classList.add('visually-hidden');
  }
};

//toggle
const toggleBtns = document.querySelectorAll('input[name="theme"]');

toggleBtns.forEach((item) => {
  item.addEventListener('click', (e) => {
    const newTheme = e.target.value;
    settheme(newTheme);
  });
});

determineThemeMode();
