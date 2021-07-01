const video = document.querySelector('#video');
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const backward = document.querySelector('#backward');
const forward = document.querySelector('#forward');
const progress = document.querySelector('#range');
 
function playingVideo(){
    video.play();
    buttonPlay.hidden = true;
    buttonPause.hidden = false;
}

function stoppingVideo(){
    video.pause();
    buttonPause.hidden = true;
    buttonPlay.hidden = false;
}

function backwardVideo(){
// video.currentTime no lo encontre
console.log(video.currentTime)
video.currentTime -=10
}

function forwardVideo(){
    console.log(video.currentTime)
    video.currentTime +=10
}


function loadedVideo(){
    this.max = this.duration;
}

function updateVideo(){
    progress.value = this.currentTime
    

}

function moveProgress(){
    video.currentTime =this.value
}

buttonPlay.addEventListener('click',playingVideo);
buttonPause.addEventListener('click',stoppingVideo);
backward.addEventListener('click',backwardVideo);
forward.addEventListener('click',forwardVideo);
video.addEventListener('loadedmetadata',loadedVideo)
video.addEventListener('timeupdate',updateVideo)
progress.addEventListener('input',moveProgress)