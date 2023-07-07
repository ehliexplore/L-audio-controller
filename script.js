const soundMap = {
  // pads line 1
  kickButton: 'kick.mp3',
  snareButton: 'snare.mp3',
  hatButton: 'hat.mp3',
  openhatButton: 'openhat.mp3',

  // pads line 2
  button808: '808.mp3',
  clapButton: 'clap.mp3',
  congaButton: 'conga.mp3',
  metalshakeButton: 'metal-shake.mp3',

  // melody 
  doButton: 'c.mp3',
  reButton: 'd.mp3',
  miButton: 'e.mp3',
  faButton: 'f.mp3',
  solButton: 'g.mp3',
  laButton: 'a.mp3',
  siButton: 'b.mp3'
}

const keyMap = {
  // pads line 1 
  'q': 'kickButton',
  'w': 'snareButton',
  'o': 'hatButton',
  'p': 'openhatButton',

  // pads line 2
  'a': 'button808',
  's': 'clapButton',
  'k': 'congaButton',
  'l': 'metalshakeButton',

  // melody 
  'z': 'doButton',
  'x': 'reButton',
  'c': 'miButton',
  'v': 'faButton',
  'b': 'solButton',
  'n': 'laButton',
  'm': 'siButton'
}

function playSound(event) {
  const buttonId = event.target.id;
  const soundFile = soundMap[buttonId];

  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
}

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase();
  const buttonId = keyMap[key];

  if (buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      // Add a class to the button when pressed
      button.classList.add(`active-${buttonId}`);

      // Trigger button click event
      button.click();
    }
  }
});

document.addEventListener('keyup', function(event) {
  const key = event.key.toLowerCase();
  const buttonId = keyMap[key];

  if (buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      // Remove the class from the button whe released
      button.classList.remove(`active-${buttonId}`);
    }
  }
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playSound);
});


// config

function showConfig() {
  cleanMain();

  const backButton = document.querySelector('.js-back').innerHTML = '<button onclick="backMain()">Back</button>';

  const configContent = document.querySelector('.js-config').innerHTML = `<button onclick="changeTheme()">change theme</button>`;

};

function cleanMain() {
  const layoutContent = document.querySelector('.js-main').innerHTML = '';
};

function changeTheme() {
  if (document.body.style.backgroundColor === 'lightgray') {
    document.body.style.backgroundColor = 'black';
    
  } else {
    document.body.style.backgroundColor = 'lightgray';
    
  }
};

function backMain() { 
  document.querySelector('.js-config').innerHTML = '';
  document.querySelector('.js-back').innerHTML = '';

  document.querySelector('.js-main').innerHTML = `
  <main class="main-style js-main">
  <button class="config-button" onclick="showConfig()">Configurações</button>

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

<div class="js-back"></div>
<div class="config-content js-config"></div>
  `;

  // Reattach event listeners 
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', playSound);
  });
}

