const soundMap = {
  kickButton: 'kick.wav',
  snareButton: 'snare.wav',
  hihatButton: 'hihat.wav'

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