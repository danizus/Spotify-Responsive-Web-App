
let audioElement = new Audio("audio1.mp3");
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay")
let myprogressbar  = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"))
let songInfo = document.getElementsByClassName("songInfo");
let id = document.getElementById("1");




let songs = [
    {songName: "your voice bethel ny", filePath:"audio.mp3", coverpath:"th.jpg"},
    {songName: "heartless", filePath:"audio1.mp3", coverpath:"th(1).jpg"},
    {songName: "adaat", filePath:"audio2.mp3", coverpath:"th(2).jpg"},
    {songName: "watchthis", filePath:"audio3.mp3", coverpath:"what.png"},
    
   
]
songItem.forEach((element ,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname1")[0].innerText = songs[i].songName;
})






// play pause logic 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        id.classList.remove('fa-play');
        id.classList.add("fa-pause");
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;

    }else{
        makeallplay();
        audioElement.pause();
        
        masterPlay.classList.remove("fa-pause");
        
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

// progress bar logic
audioElement.addEventListener("timeupdate",()=>{
    let progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value = progress;
    myprogressbar.addEventListener('change',()=>{
        audioElement.currentTime =(myprogressbar.value * audioElement.duration)/100 ;

    })
    

})

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{

    

    
    element.addEventListener("click", (e)=>{
        if(element.classList.contains("fa-play")){
        makeallplay();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = songs[songIndex-1].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add("fa-pause");
        masterSongName.innerText= songs[songIndex-1].songName;
        gif.style.opacity = 1;
    }else{
        makeallplay();
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add("fa-play");
        e.target.classList.remove("fa-pause");
        e.target.classList.add("fa-play");

      
      
      
    }})
    
     
    

        
   
        
    })

document.getElementById("previous").addEventListener("click",()=>{
    makeallplay();
    id = songIndex;
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
audioElement.src = songs[songIndex-1].filePath;
    audioElement.currentTime = 0;
    masterSongName.innerText= songs[songIndex-1].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add("fa-pause");
    document.getElementById(songIndex.toString()).classList.remove('fa-play');
    document.getElementById(songIndex.toString()).classList.add("fa-pause");
    masterSongName.innerText= songs[songIndex-1].songName;


}
)
document.getElementById("next").addEventListener("click",()=>{
    makeallplay();
    id = songIndex;
    if(songIndex>=3){
        songIndex = 0;
    }else{
        songIndex +=1;
    }
audioElement.src = songs[songIndex-1].filePath;
masterSongName.innerText= songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add("fa-pause");
    document.getElementById(songIndex.toString()).classList.remove('fa-play');
    document.getElementById(songIndex.toString()).classList.add("fa-pause");
    
    


}
)


makeallplay= ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
  
   
   
   

        
    
      
    

}