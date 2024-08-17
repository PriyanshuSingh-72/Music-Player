// const makeallPlay = ()=>{
//     Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
//         element.classList.remove("fa-pause");
//         element.classList.add("fa-play");
//     })
// }

// Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
//     element.addEventListener(("click"),(e)=>{
//         console.log(e.target);
//         makeallPlay();
//         e.target.classList.remove("fa-play");
//         e.target.classList.add("fa-pause");

//     })
// })


// let song =[
//     {songname: "Baliye re", filepath: "song/1.mp3",coverpath: " cover/1.jpg"},
//     {songname: "Sanam Teri Kasam", filepath: "song/2.mp3",coverpath: " cover/2.jpg"},
//     {songname: "Dur na karin" ,filepath: "song/3.mp3",coverpath: " cover/3.jpg"},
//     {songname: "I mC ountin", filepath: "song/4.mp3",coverpath: " cover/4.jpg"},
//     {songname: "Paradise", filepath: "song/5.mp3",coverpath: " cover/5.jpg"},
//     {songname:" Janam", filepath: "song/6.mp3",coverpath: " cover/6.jpeg"},
// ]


// songItems.forEach((element,i)=>{
//     element.getElementsByTagName("img")[0].src =song[i].coverpath;
//     console.log(element,i);
//     // element.document.querySelector("p").innerText = song[i].songname;
//     element.getElementsByTagName("").innerText = song[i].songname;
// })