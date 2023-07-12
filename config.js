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

  document.querySelector('.js-presets-buttons').innerHTML = '<button class="preset-1-button" onclick="selectPreset1()">Preset 1</button> <button class="preset-2-button" onclick="selectPreset2()">Preset 2</button>';
};


function selectPreset1() {
  const presetSounds = {
    kickButton: 'preset1-kick.mp3',
    snareButton: 'preset1-snare.mp3',
    hatButton: 'preset1-hat.mp3',
    openhatButton: 'preset1-openhat.mp3',
    button808: 'preset1-808.mp3',
    clapButton: 'preset1-clap.mp3',
    congaButton: 'preset1-conga.mp3',
    metalshakeButton: 'preset1-metal-shake.mp3',
    doButton: 'preset1-c.mp3',
    reButton: 'preset1-d.mp3',
    miButton: 'preset1-e.mp3',
    faButton: 'preset1-f.mp3',
    solButton: 'preset1-g.mp3',
    laButton: 'preset1-a.mp3',
    siButton: 'preset1-b.mp3'
  };

  updateSoundFiles(presetSounds);
}

function selectPreset2() {
  const presetSounds = {
    kickButton: 'preset2-kick.mp3',
    snareButton: 'preset2-snare.mp3',
    hatButton: 'preset2-sword.mp3',
    openhatButton: 'preset2-vib.mp3',
    button808: 'preset2-808.mp3',
    clapButton: 'preset2-clap.mp3',
    congaButton: 'preset2-agogo-1.mp3',
    metalshakeButton: 'preset2-agogo-2.mp3',
    doButton: 'preset2-c.mp3',
    reButton: 'preset2-d.mp3',
    miButton: 'preset2-e.mp3',
    faButton: 'preset2-f.mp3',
    solButton: 'preset2-g.mp3',
    laButton: 'preset2-a.mp3',
    siButton: 'preset2-b.mp3'
  };

  updateSoundFiles(presetSounds);
}

function updateSoundFiles(presetSounds) {
  for (const buttonId in presetSounds) {
    if (soundMap.hasOwnProperty(buttonId)) {
      soundMap[buttonId] = presetSounds[buttonId];
    }
  }
}


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
  document.querySelector('.js-presets-buttons').innerHTML = '';

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

  <div class="presets-div js-presets-buttons"></div>
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