
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songName: "Mane Meri Jaan", filePath: "s ongs/1.mp3", coverPath: "covers/1.jpg"},
//     {songName: "Nen Ready ( LEO )", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
//     {songName: "Kaavalayya ( Jailer )", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
//     {songName: "Ticket E Konakundaa", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
//     {songName: "Vishnu's Fav", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
//     {songName: "Pyaar Lona Paagal", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
//     {songName: "Ram Sita Ram", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
//     {songName: "Ye chota Nuv Unna", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
//     {songName: "Bad Boy", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
//     {songName: "Psyhco", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
// ]

let songs = [
    {songName: "1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "11", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "12", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "13", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "14", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "15", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "16", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "17", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "18", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "19", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "20", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "21", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "22", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "23", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "24", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {songName: "25", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "26", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {songName: "27", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    {songName: "28", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "29", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {songName: "30", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
    {songName: "31", filePath: "songs/31.mp3", coverPath: "covers/31.jpg"},
    {songName: "32", filePath: "songs/32.mp3", coverPath: "covers/32.jpg"},
    {songName: "33", filePath: "songs/33.mp3", coverPath: "covers/33.jpg"},
    {songName: "34", filePath: "songs/34.mp3", coverPath: "covers/34.jpg"},
    {songName: "35", filePath: "songs/35.mp3", coverPath: "covers/35.jpg"},
    {songName: "36", filePath: "songs/36.mp3", coverPath: "covers/36.jpg"},
    {songName: "37", filePath: "songs/37.mp3", coverPath: "covers/37.jpg"},
    {songName: "38", filePath: "songs/38.mp3", coverPath: "covers/38.jpg"},
    {songName: "39", filePath: "songs/39.mp3", coverPath: "covers/39.jpg"},
    {songName: "40", filePath: "songs/40.mp3", coverPath: "covers/40.jpg"},
    {songName: "41", filePath: "songs/41.mp3", coverPath: "covers/41.jpg"},
    {songName: "42", filePath: "songs/42.mp3", coverPath: "covers/42.jpg"},
    {songName: "43", filePath: "songs/43.mp3", coverPath: "covers/43.jpg"},
    {songName: "44", filePath: "songs/44.mp3", coverPath: "covers/44.jpg"},
    {songName: "45", filePath: "songs/45.mp3", coverPath: "covers/45.jpg"},
    {songName: "46", filePath: "songs/46.mp3", coverPath: "covers/46.jpg"},
    {songName: "47", filePath: "songs/47.mp3", coverPath: "covers/47.jpg"},
    {songName: "48", filePath: "songs/48.mp3", coverPath: "covers/48.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        console.log(audioElement.src)
        const songNumber =audioElement.src ?  audioElement.src.match(/\/songs\/(\d+)\.mp3$/): 0;
        console.log(songNumber)
        // songIndex = parseInt(e.target.id);
        songIndex = songNumber;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// const shufflePlaylist = () => {
//     for (let i = songs.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [songs[i], songs[j]] = [songs[j], songs[i]];
//     }
  
//     // Update the displayed playlist
//     songItems.forEach((element, i) => {
//       element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//       element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
//       audioElement.src = `songs/${songs[i].filePath}.mp3`
//     });
  
   
//   };
  
//   // Shuffle button
//   const shuffleButton = document.getElementById('shuffle');
//   shuffleButton.addEventListener('click', () => {
//     shufflePlaylist();
//   });




const shufflePlaylist = () => {
    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }

    // Update the displayed playlist
    songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });

    // Set the audio source to the first shuffled song
    songIndex=0;
    audioElement.src = songs[0].filePath;
};

// Shuffle button
const shuffleButton = document.getElementById('shuffle');
shuffleButton.addEventListener('click', () => {
    shufflePlaylist();
    // If the current song is playing, update the audio source to the shuffled song
    if (!audioElement.paused || audioElement.currentTime > 0) {
        songIndex = 0 ;
        audioElement.src = songs[0].filePath;
        audioElement.play();
    }
});