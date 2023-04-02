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
function mute(){
    arr.map(a=>{
        let audio=document.getElementById(a);
        audio.muted=true;
    })
}
