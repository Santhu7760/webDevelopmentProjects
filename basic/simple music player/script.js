const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("current-time");
const totalDurationDisplay = document.getElementById("total-duration");
const songName = document.getElementById("song-name");
const songImage = document.getElementById("song-image");

const songs = [
  {
    name: "Hey Minnale",
    src: "./songs/amaran/song.m4a",
    image: "./songs/amaran/image.jpg",
  },
  {
    name: "Manasillayo",
    src: "./songs/vettaiyan/song.m4a",
    image: "./songs/vettaiyan/image.jpg",
  },
  {
    name: "Golden Sparrow",
    src: "./songs/dhanush/song.m4a",
    image: "./songs/dhanush/image.jfif",
  },
];

let currentSongIndex = 0;

// Load song details
function loadSong(index) {
  const song = songs[index];
  songName.textContent = song.name;
  audio.src = song.src;
  songImage.src = song.image;
  document.querySelector(
    ".background"
  ).style.backgroundImage = `url(${song.image})`;
}

// Play or pause song
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
}

// Restart song
function restartSong() {
  audio.currentTime = 0;
  audio.play();
}

// Update progress bar
function updateProgressBar() {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  totalDurationDisplay.textContent = formatTime(audio.duration);
}

// Seek song
function seekSong(event) {
  const width = progressBar.offsetWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Format time (mm:ss)
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// Event listeners
playPauseBtn.addEventListener("click", togglePlayPause);
restartBtn.addEventListener("click", restartSong);
progressBar.addEventListener("click", seekSong);
audio.addEventListener("timeupdate", updateProgressBar);
audio.addEventListener("ended", () => {
  nextBtn.click(); // Play next song on end
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playPauseBtn.textContent = "Pause";
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playPauseBtn.textContent = "Pause";
});

// Initialize
loadSong(currentSongIndex);
