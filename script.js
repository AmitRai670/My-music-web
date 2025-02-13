// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let currentTimeDisplay = document.getElementById('currentTime');
let durationDisplay = document.getElementById('duration');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif')


let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
];

// Play/Pause functionality
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.replace('fa-circle-play', 'fa-pause');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.replace('fa-pause', 'fa-circle-play');
    gif.style.opacity = 0;
  }
});

// Forward and Backward functionality
document.querySelector('.fa-forward').addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  updateSong();
});

document.querySelector('.fa-backward').addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  updateSong();
});

// Progress Bar and Time Syncing
audioElement.addEventListener('timeupdate', () => {
  const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
  currentTimeDisplay.innerText = formatTime(audioElement.currentTime);
  durationDisplay.innerText = formatTime(audioElement.duration);
});

myProgressBar.addEventListener('input', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Helper Function to Update Song Information
function updateSong() {
  audioElement.src = songs[songIndex].filepath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  masterPlay.classList.replace('fa-circle-play', 'fa-pause');
 
}

// Helper Function to Format Time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
