const soundMap = {
  // pads line 1
  kickButton: 'preset1-kick.mp3',
  snareButton: 'preset1-snare.mp3',
  hatButton: 'preset1-hat.mp3',
  openhatButton: 'preset1-openhat.mp3',

  // pads line 2
  button808: 'preset1-808.mp3',
  clapButton: 'preset1-clap.mp3',
  congaButton: 'preset1-conga.mp3',
  metalshakeButton: 'preset1-metal-shake.mp3',

  // melody 
  doButton: 'preset1-c.mp3',
  reButton: 'preset1-d.mp3',
  miButton: 'preset1-e.mp3',
  faButton: 'preset1-f.mp3',
  solButton: 'preset1-g.mp3',
  laButton: 'preset1-a.mp3',
  siButton: 'preset1-b.mp3'
};

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
};

function playSound(event) {
  const buttonId = event.target.id;
  const soundFile = soundMap[buttonId];

  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
};

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase();
  const buttonId = keyMap[key];

  if (buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      // Add a class to the button when pressed
      if (document.body.style.backgroundColor === 'lightgray') {
        button.classList.add(`lightmode-active-${buttonId}`);
      } else {
        button.classList.add(`active-${buttonId}`);
      }
      

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
      button.classList.remove(`lightmode-active-${buttonId}`);
    }
  }
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playSound);
});


// config




