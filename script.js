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
  metalshakeButton: 'metal-shake.mp3'
}

const keyMap = {
  // pads line 1 
  'q': 'kickButton',
  'w': 'snareButton',
  'e': 'hatButton',
  'r': 'openhatButton',

  // pads line 2
  'h': 'button808',
  'j': 'clapButton',
  'k': 'congaButton',
  'l': 'metalshakeButton'
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