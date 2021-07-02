const video = document.querySelector('#video')
const buttonPlay = document.querySelector('#play')
const buttonPause = document.querySelector('#pause')
const backward = document.querySelector('#backward')
const forward = document.querySelector('#forward')
const progress = document.querySelector('#range')

function playingVideo() {
  video.play()
  buttonPlay.hidden = true
  buttonPause.hidden = false
}

function stoppingVideo() {
  video.pause()
  buttonPause.hidden = true
  buttonPlay.hidden = false
}

function backwardVideo() {
  video.currentTime -= 10
}

function forwardVideo() {
  video.currentTime += 10
}

function loadedVideo() {
  this.max = this.duration
}

function updateVideo() {
  progress.value = this.currentTime
}

function moveProgress() {
  video.currentTime = this.value
}

function addListener(target, callback, event = 'click') {
  target.addEventListener(event, callback)
}

addListener(buttonPlay, playingVideo)
addListener(buttonPause, stoppingVideo)
addListener(backward, backwardVideo)
addListener(forward, forwardVideo)
addListener(video, loadedVideo, 'loadedmetadata')
addListener(video, updateVideo, 'timeupdate')
addListener(progress, moveProgress, 'input')
