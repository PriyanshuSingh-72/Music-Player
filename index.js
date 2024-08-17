let masterPlay = document.querySelector("#masterplay");
let audio = new Audio("song/1.mp3");
let myprogress = document.querySelector("#myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songitems"));
let songIndex =0;
let songname= document.getElementsByClassName("songname");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");




let song =[
    {songname: "Baliye re", filepath: "song/1.mp3",coverpath: " cover/1.jpg"},
    {songname: "Sanam Teri Kasam", filepath: "song/2.mp3",coverpath: " cover/2.jpg"},
    {songname: "Dur na karin" ,filepath: "song/3.mp3",coverpath: " cover/3.jpg"},
    {songname: "I mC ountin", filepath: "song/4.mp3",coverpath: " cover/4.jpg"},
    {songname: "Paradise", filepath: "song/5.mp3",coverpath: " cover/5.jpg"},
    {songname:" Janam", filepath: "song/6.mp3",coverpath: " cover/6.jpeg"},
];






masterPlay.addEventListener("click",()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }
    else{
        audio.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
    }
})


audio.addEventListener("timeupdate",()=>{
    progress = parseInt((audio.currentTime/audio.duration)*100);
    myprogress.value = progress;
})

myprogress.addEventListener("change",()=>{
    audio.currentTime = (myprogress.value*audio.duration)/100;
})


songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = song[i].coverpath;
    element.querySelector("p").innerText = song[i].songname;
});

const makeallPlay  =(()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");        
    })
    
})


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeallPlay();
        songIndex = parseInt(e.target.id);
        audio.src = `song/${songIndex+1}.mp3`;
        audio.play();
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        audio.currentTime = 0;
    })
})

next.addEventListener("click",()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audio.src = `song/${songIndex+1}.mp3`;
    audio.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    audio.currentTime = 0;
})

previous.addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audio.src = `song/${songIndex+1}.mp3`;
    audio.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    audio.currentTime = 0;
})