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

function playSound(event) {
  const buttonId = event.target.id;
  const soundFile = soundMap[buttonId];

  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playSound);
})