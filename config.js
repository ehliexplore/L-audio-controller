function showConfig() {
  cleanMain();

  const doneButton = document.querySelector('.js-done').innerHTML = '<button class="done-button-style" onclick="backMain()">Done</button>';

  if (document.body.style.backgroundColor === 'lightgray') {
    document.querySelector('.js-config').innerHTML = `
    <button class="dark-theme-button" onclick="changeTheme()">Dark theme</button>`;
  } else {
    document.querySelector('.js-config').innerHTML = `
    <button class="light-theme-button" onclick="changeTheme()">Light theme</button>`;
  }

};

function cleanMain() {
  const layoutContent = document.querySelector('.js-main').innerHTML = '';
};

function changeTheme() {
  if (document.body.style.backgroundColor === 'lightgray') {
    document.body.style.backgroundColor = 'black';
    document.querySelector('.js-config').innerHTML = `
    <button class="light-theme-button" onclick="changeTheme()">Light theme</button>`;
    
  } else {
    document.body.style.backgroundColor = 'lightgray';
    document.querySelector('.js-config').innerHTML = `
    <button class="dark-theme-button" onclick="changeTheme()">Dark theme</button>`;
    
  }
};

function backMain() { 
  document.querySelector('.js-config').innerHTML = '';
  document.querySelector('.js-done').innerHTML = '';

  document.querySelector('.js-main').innerHTML = `
  <main class="main-style js-main">
  <button class="config-button" onclick="showConfig()">Settings</button>

  <div class="pads-div-1">
    <button id="kickButton" class="pad-style-1"></button>
    <button id="snareButton" class="pad-style-2"></button>
    <button id="hatButton" class="pad-style-3"></button>
    <button id="openhatButton" class="pad-style-4"></button>
  </div>
  <div class="pads-div-2">
    <button id="button808" class="pad-style-5"></button>
    <button id="clapButton" class="pad-style-6"></button>
    <button id="congaButton" class="pad-style-7"></button>
    <button id="metalshakeButton" class="pad-style-8"></button>
  </div>

  <div class="melody-div">
    <button id="doButton" class="melody-button-style-first"></button>
    <button id="reButton" class="melody-button-style-second"></button>
    <button id="miButton" class="melody-button-style"></button>
    <button id="faButton" class="melody-button-style-center"></button>
    <button id="solButton" class="melody-button-style"></button>
    <button id="laButton" class="melody-button-style-penultimate"></button>
    <button id="siButton" class="melody-button-style-last"></button>
  </div>
</main>

<div class="js-done done-button-div"></div>
<div class="config-content js-config"></div>
  `;

  // Reattach event listeners 
  const buttons = document.querySelectorAll('button');

  if (document.body.style.backgroundColor === 'lightgray') {
    buttons.forEach((button) => {
      button.classList.add('lightmode-buttons')
      button.classList.add('lightmode-hover-buttons')
    })
  };
  

  buttons.forEach((button) => {
    button.addEventListener('click', playSound);

  });
}