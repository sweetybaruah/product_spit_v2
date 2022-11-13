var animation1 = gsap.timeline();
var item1 = document.querySelector('.item1')
var item6 = document.querySelector('.item6')
var hour = document.querySelector('.hour')
var min = document.querySelector('.min')
var sec = document.querySelector('.sec')
var pluse = document.querySelector('.pluse')

var countDownTime_iftar = new Date("nov 30, 2022 18:23:00").getTime();
var countDownTime_seheri = new Date("nov 30, 2022 04:18:00").getTime();
var timer = document.querySelector('.timer')
var sehriSet = [
  "4:27","4:26","4:24","4:24","4:23",
  "4:22","4:21","4:20","4:19","4:18",
  "4:17","4:15","4:14","4:13","4:12",
  "4:11","4:10","4:09","4:08","4:07","4:06",
  "4:05","4:05","4:04","4:03","4:02","4:01",
  "4:00","3:59","3:58","3:57"
];

var iftarSet = [
  "18:19","18:19","18:20","18:20",
  "18:21","18:21","18:21","18:22","18:22",
  "18:23","18:23","18:23","18:24","18:24",
  "18:24","18:25","18:25","18:26","18:26",
  "18:27","18:27","18:28","18:28","18:29",
  "18:29","18:29","18:30","18:30","18:31",
  "18:31","18:32"
]

setInterval(function () {
var today = new Date();
var curDate = today.getDate();
var curTime = today.getHours()*60*60+ today.getMinutes()*60+today.getSeconds();
// console.log(today)
// console.log(curDate)
// console.log(curTime)
var checkIftar = iftarSet[curDate].split(":");
// console.log(checkIftar)
var checkSehri = sehriSet[curDate].split(":");
// console.log(checkSehri);
var timeIftar = checkIftar[0]*60*60 + checkIftar[1]*60;
// console.log(timeIftar);
var timeSehri = checkSehri[0]*60*60 + checkSehri[1]*60;
// console.log(timeSehri);
if (timeSehri<timeIftar && timeSehri>curTime && timeSehri>=0){
    checkSehriTime(curDate, curTime);
}
else if (timeSehri<timeIftar && timeIftar<curTime) {
    checkSehriTime(curDate, curTime);
}
else {
    checkIftarTime(curDate, curTime);
}
},1e3);


function checkIftarTime(todayDate, curTime) {
    var time = iftarSet[todayDate].split(":");
    var setTime = time[0]*60*60 + time[1]*60;
    // console.log(setTime)
    var diffTime = setTime - curTime;
    // console.log(diffTime)
    if (diffTime<setTime && diffTime>=0){
        item1.classList.remove('hidden')
        timer.innerHTML = printTimer(diffTime);
    }
}

function checkSehriTime(todayDate, curTime){
    var time = sehriSet[todayDate].split(":");
    var setTime = time[0]*60*60 + time[1]*60;
    var diffTime = setTime - curTime;
    if (diffTime<setTime && diffTime>=0){
        timer.innerHTML = printTimer(diffTime);
        item6.classList.remove('hidden')
    }
    else {
        var lastTime = setTime+24*60*60;
        var sehriEnd = lastTime - curTime;
        timer.innerHTML = printTimer(sehriEnd);
        item6.classList.remove('hidden')
    }

}
function printTimer(sec) {
    
    hr = Math.floor(sec / 3600) % 24;
    mm = Math.floor(sec / 60) % 60;
    ss = sec % 60;

    var x = hr < 10? "0"+hr : hr;
    var y = mm < 10? "0"+mm : mm;
    var z = ss < 10? "0"+ss : ss;
    return ` <span class="hour">${x}</span> <span class="min">${y}</span> <span class="sec">${z}</span>`;
}



Draggable.create('.item3_2',{
    bounds: {minX: 0, maxX: 40, minY: 0, maxY: 0},
    type: 'x,y' , 
    intertia: true,
    onDragStart: function(){
        StartX = this.x;  StartY = this.y;
        animation1.to(".item3_2", {opacity: 1})
                    .to(".item2",{duration: 1, rotation: 270})  
                    .to(".item3_2", {autoAlpha:0})
                
    },
    onDragEnd: function(){
        TweenLite.to( this.target , 1 , { x:StartX , y:StartY})
        setTimeout(function(){
            animation1.to(".item3_2", {opacity: 1})
        },1000)
        animation1.to(".item3", {autoAlpha: 0}) 
                .to(".item2", {duration: 1, rotation: 90})
                
        // animation1.revert();    
    }
    
    })

Draggable.create('.item3_1',{
    bounds: {minX: 0, maxX: 40, minY: 0, maxY: 0},
    type: 'x,y' , 
    intertia: true,
    onDragStart: function(){
        StartX = this.x;  StartY = this.y;
        animation1.to(".item3_1", {autoAlpha: 1})
                    .to(".item2",{duration: 1, rotation: 180}) 
                    .to(".item3_1",{autoAlpha: 0})
    },
    onDragEnd: function(){
        TweenLite.to( this.target , 1 , { x:StartX , y:StartY})
        setTimeout(function(){
            animation1.to(".item3_2", {opacity: 1})
        },1000)
    }
    
    })

Draggable.create('.item3',{
    bounds: {minX: 0, maxX: 40, minY: 0, maxY: 0},
    type: 'x,y' , 
    intertia: true,
    onDragStart: function(){
        StartX = this.x;  StartY = this.y;
        animation1.to(".item2", {duration: 1, rotation: 90})
                .to(".item3", {autoAlpha: 0})     
    },
    onDragEnd: function(){
        TweenLite.to( this.target , 1 , { x:StartX , y:StartY})
        setTimeout(function(){
            animation1.to(".item3_1", {opacity: 1})
        },1000)    
    }
    
    })



