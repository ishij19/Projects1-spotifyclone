// console.log("Welcome to Spotify");

// // Initialize the Variables
// let songIndex = 0;
// let audioElement = new Audio('spotifyClone/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songName: "Old Bollywood Mashup Khudgharz", filePath: "spotifyClone/1.mp3", coverPath: "spotifyClone/1.jpg"},
//     {songName: "Kailash on Coke Studio", filePath: "spotifyClone/2.mp3", coverPath: "spotifyClone/2.jpg"},
//     {songName: "Wedding Mashup", filePath: "spotifyClone/3.mp3", coverPath: "spotifyClone/3.jpg"},
//     {songName: "Patakha Guddi Highway", filePath: "spotifyClone/4.mp3", coverPath: "spotifyClone/4.jpg"},
//     {songName: "Sooraj Dooba Hain", filePath: "spotifyClone/5.mp3", coverPath: "spotifyClone/5.jpg"},
//     {songName: "Twist", filePath: "spotifyClone/6.mp3", coverPath: "spotifyClone/6.jpg"},
//     {songName: "Afreen Afreen", filePath: "spotifyClone/7.mp3", coverPath: "spotifyClone/7.jpg"},
//     {songName: "Chaiyya Chaiyya", filePath: "spotifyClone/8.mp3", coverPath: "spotifyClone/8.jpg"},
//     {songName: "Tumse Milke Dilka Jo Haal", filePath: "spotifyClone/9.mp3", coverPath: "spotifyClone/9.jpg"},
//     {songName: "Badtameez Dil", filePath: "spotifyClone/10.mp3", coverPath: "spotifyClone/10.jpg"},
// ]

// songItems.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })
 

// // Handle play/pause click
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })
// // Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{ 
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `spotifyClone/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `spotifyClone/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `spotifyClone/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })






console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('spotifyClone/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let isShuffle = false; // Shuffle state
let playedSongs = []; // Array to keep track of played songs

let songs = [
    {songName: "Bollywood Mashup Khudgharz", filePath: "spotifyClone/1.mp3", coverPath: "spotifyClone/1.jpg"},
    {songName: "Kailash on Coke Studio", filePath: "spotifyClone/2.mp3", coverPath: "spotifyClone/2.jpg"},
    {songName: "Wedding Mashup", filePath: "spotifyClone/3.mp3", coverPath: "spotifyClone/3.jpg"},
    {songName: "Patakha Guddi Highway", filePath: "spotifyClone/4.mp3", coverPath: "spotifyClone/4.jpg"},
    {songName: "Sooraj Dooba Hain", filePath: "spotifyClone/5.mp3", coverPath: "spotifyClone/5.jpg"},
    {songName: "Twist", filePath: "spotifyClone/6.mp3", coverPath: "spotifyClone/6.jpg"},
    {songName: "Afreen Afreen", filePath: "spotifyClone/7.mp3", coverPath: "spotifyClone/7.jpg"},
    {songName: "Chaiyya Chaiyya", filePath: "spotifyClone/8.mp3", coverPath: "spotifyClone/8.jpg"},
    {songName: "Tumse Milke Dilka Jo Haal", filePath: "spotifyClone/9.mp3", coverPath: "spotifyClone/9.jpg"},
    {songName: "Badtameez Dil", filePath: "spotifyClone/10.mp3", coverPath: "spotifyClone/10.jpg"},
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
        
        // Set the audio source and play the selected song
        audioElement.src = songs[songIndex].filePath; // Corrected this line
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        
        // Play the song and update the UI
        audioElement.play();
        gif.style.opacity = 1;

        // Update master play button state
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
        playedSongs.push(randomIndex);
        songIndex = randomIndex;
    } else {
        songIndex = (songIndex + 1) % songs.length; // Loop back to the start
    }
    audioElement.src = `spotifyClone/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementById('songItemPlay' + songIndex).classList.remove('fa-play-circle');
    document.getElementById('songItemPlay' + songIndex).classList.add('fa-pause-circle');
});

// Previous song functionality
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop back to the end
    audioElement.src = `spotifyClone/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementById('songItemPlay' + songIndex).classList.remove('fa-play-circle');
    document.getElementById('songItemPlay' + songIndex).classList.add('fa-pause-circle');
});

// Shuffle toggle functionality
document.getElementById('shuffle').addEventListener('click', () => {
    isShuffle = !isShuffle;
    document.getElementById('shuffle').classList.toggle('active', isShuffle);
});

// Autoplay next song when current song ends
audioElement.addEventListener('ended', () => {
    document.getElementById('next').click(); // Trigger next song functionality
});