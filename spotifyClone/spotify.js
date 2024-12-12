console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let isShuffle = false; // Shuffle state
let playedSongs = []; // Array to keep track of played songs

let songs = [
    {songName: "Old Bollywood Mashup Khudgharz", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Kailash on Coke Studio", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Wedding Mashup", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Patakha Guddi Highway", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Sooraj Dooba Hain", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Twist", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "Afreen Afreen", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "Chaiyya Chaiyya", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "Tumse Milke Dilka Jo Haal", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "Badtameez Dil", filePath: "10.mp3", coverPath: "10.jpg"},
];

songItems.forEach((element, i) => { 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => { 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
    myProgressBar.value = progress;
});

// Seekbar change event
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Function to make all play icons to play
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Play a specific song
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => { 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1 }.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

// Next song functionality
document.getElementById('next').addEventListener('click', () => {
    if (isShuffle) {
        // Shuffle logic
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (playedSongs.includes(randomIndex) && playedSongs.length < songs.length);
        
        if (playedSongs.length === songs.length) {
            playedSongs = []; // Reset if all songs have been played
        }
        songIndex = randomIndex;
        playedSongs.push(songIndex);
    } else {
        songIndex = (songIndex >= songs.length - 1) ? 0 : songIndex + 1;
    }
    playSong();
});

// Previous song functionality
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex <= 0) ? 0 : songIndex - 1;
    playSong();
});

// Autoplay functionality
audioElement.addEventListener('ended', () => {
    document.getElementById('next').click(); // Trigger next song
});

// Function to play the song
const playSong = () => {
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
};

// Shuffle toggle button (add this to your HTML)
const shuffleButton = document.createElement('button');
shuffleButton.innerText = 'Shuffle';
document.body.appendChild(shuffleButton);
shuffleButton.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleButton.classList.toggle('active', isShuffle);
});