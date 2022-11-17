// Add js here.

let playButton=document.getElementById("play");
let video=document.getElementById("videoplayer");
function playVideo(){
    video.play();
}
playButton.addEventListener('click',playVideo);

let pauseButton=document.getElementById("pause");
function pauseVideo(){
    video.pause();
}
pauseButton.addEventListener('click',pauseVideo);

let slowerButton=document.getElementById("slower")
function slowerRate(){
    if(video.playbackRate==2){
        video.playbackRate=1;
    }
    else if(video.playbackRate==1){
        video.playbackRate=0.5;
    }
    else if(video.playbackRate==0.5){
       window.alert('Video is at slowest speed!');
    }
}
slowerButton.addEventListener('click',slowerRate);

let fasterButton=document.getElementById("faster")
function fasterRate(){
    if(video.playbackRate==0.5){
        video.playbackRate=1;
    }
    else if(video.playbackRate==1){
        video.playbackRate=2;
    }
    else if(video.playbackRate==2){
       window.alert('Video is at fastest speed!');
    }
}

fasterButton.addEventListener('click',fasterRate);

let skipButton=document.getElementById("skip");

function skiptime(){
    video.currentTime = video.currentTime + 15;
    if (video.currentTime > video.duration){
        video.currentTime = 0;
    }
}
skipButton.addEventListener('click',skiptime);

let muteButton=document.getElementById("mute");

function mutesound(){
 if(video.muted === true){
    video.muted = false;
    mute.innerHTML = 'Mute';
 }
 else if(video.muted === false){
    video.muted = true;
    mute.innerHTML = 'Unmute';
 }
}
muteButton.addEventListener('click',mutesound);

let slider=document.getElementById("slider");
let volume=document.getElementById("volume");

function slidervolume(){
    video.volume = slider.value / 100;
    volume.innerHTML = slider.value;
}

slider.addEventListener('change',slidervolume);


video.load();
video.autoplay = false;
video.loop = false;