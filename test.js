const startTime=10;
let time=startTime*60;

const countDownE=document.getElementById('test');
setInterval(update,1000);
function update(){
    const min=Math.floor(time/60);
    let second=time%60;
    if(second<10){
        second='0'+second;
    }
    countDownE.innerHTML=`${min}:${second}`;
    time-=1;
    if(time<60){
        alert("The test is about to close soon!");
        if(time=0){
            alert("The test is over.");
        }
    }
   

    var start = document.getElementById("Circle")
    var ctx =start.getContext("2d");
    var x=250, y=150,radius=50;  //x=250 the x coordinate y=150 the y coordinate z=150 the radius;
    //if(time>500){
        
    //ctx.stroke();
    //}
    //while(time>0){
    //var precentage=time;   time*0.8; time*0.6; time*0.4; time*0.2; time*0.1;
    if (time>500){
        //x=250;
        ctx.strokeStyle = 'grey';
        radius=150;
        //x=200;
        //ctx.arc(250,150,150,0,Math.PI*4,true);
//if(i%2==0){
        ctx.lineWidth = 10; 
        //alert("1");
        //ctx.stroke();
    }
    else if (time<500&&time>400){
        ctx.strokeStyle = 'green';
        radius=120;
        //ctx.arc(20,150,150,0,Math.PI*4,true);
//if(i%2==0){
        //x=150;
        ctx.lineWidth = 30;
        //alert("2");

        //ctx.stroke();
        //ctx.update.arc(20,150,150,0,Math.PI*4,true);
    }
    else if (time<400&&time>300){
        ctx.strokeStyle = 'black';
        radius=90;
        ctx.lineWidth = 40;
        //alert("3");

    }
    else if (time<300&&time>200){
        ctx.strokeStyle = 'yellow';
        radius=60;
        ctx.lineWidth=40;
        //alert("4");

    }
    else if(time<200&&time>100){
        ctx.strokeStyle = 'red';
        radius=30;
        ctx.lineWidth=50;
        //alert("5");

    }
    else if(time<100) {
        ctx.strokeStyle = 'blue';
        radius=30;
        ctx.lineWidth=60;
    }
ctx.arc(x,y,radius,0,Math.PI*4,true);

//ctx.strokeStyle = 'blue';
//if(i%2==0){
    //ctx.lineWidth = 10; 
ctx.stroke();
//}
//if(i%2==0){
    //ctx.lineWidth = 10; 
    //}
//ctx.strokeStyle = '#FF001';}
//else{
  //  ctx.lineWidth=5;
//}
//ctx.strokeStyle = '#FF0000';
//if (time%2==1){
  //  ctx.lineWidth=5;
//}
//else{
//ctx.lineWidth=10;}
//}
  

window.onload=draw;
    
}