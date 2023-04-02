const description={
    Q:"Heater-1",
    W:"Heater-2",
    E:"Heater-3",
    A:"Heater-4",
    S:"Clap",
    D:"Open-HH",
    Z:"Kick-n-Hat",
    X:"Kick",
    C:"Closed-HH"
}
const arr=['Q','W','E','A','S','D','Z','X','C']
const q=document.getElementById("q");
const w=document.getElementById("w");
const e=document.getElementById("e");
const a=document.getElementById("a");
const s=document.getElementById("s");
const d=document.getElementById("d");
const z=document.getElementById("z");
const x=document.getElementById("x");
const c=document.getElementById("c");
const data=document.getElementById("display");
q.addEventListener("click",()=>{playsound("Q")});
w.addEventListener("click",()=>{playsound("W")});
e.addEventListener("click",()=>{playsound("E")});
a.addEventListener("click",()=>{playsound("A")});
s.addEventListener("click",()=>{playsound("S")});
d.addEventListener("click",()=>{playsound("D")});
z.addEventListener("click",()=>{playsound("Z")});
x.addEventListener("click",()=>{playsound("X")});
c.addEventListener("click",()=>{playsound("C")});

function playsound(key){
    const sound=document.getElementById(key);
    sound.play();
    console.log(description[key])
    data.innerText=description[key]
}

function mute(){
    arr.map(a=>{
        let audio=document.getElementById(a);
        audio.muted=true;
    })
}
function unmute(){
    arr.map(a=>{
        let audio=document.getElementById(a);
        audio.muted=false;
    })
}
function setvolume(vol){
    arr.map(a=>{
        let audio=document.getElementById(a);
        audio.volume=vol;
    })
}
document.addEventListener("keydown",(event)=>{playsound(event.key.toUpperCase())
})
const button=document.getElementById("mute");
button.addEventListener("click",()=>{
    if(button.innerHTML=="<i class=\"bi bi-volume-up-fill\"></i>")
    {
    button.innerHTML=("<i class=\"bi bi-volume-mute-fill\"></i>");
    mute();
    }
    else
    {
    button.innerHTML=("<i class=\"bi bi-volume-up-fill\"></i>");
    unmute();
    }
})
const volumeSlider = document.getElementById("slider");
  volumeSlider.addEventListener("input", ()=> {
    const vol = volumeSlider.value/100;
    setvolume(vol)
  });