let bgColor = 60;
let w = 34;
let angle = 0;
let ma = 0;
let maxD;
let level =8;

function setup() {
    createCanvas(400,400,WEBGL);
    ma = atan(1/sqrt(2));
    maxD = dist(0,0,200,200);
}

function draw() {
  background(bgColor);
  ortho(-400,400,400,-400,-600,600);
  let offset = 0;
  document.getElementById("fps").innerHTML = 'fps =' + floor(frameRate()) + ' intensity= ' + level;

  rotateX(QUARTER_PI);
  rotateY(ma);

  for(let z = 0 ; z < width ;z += w)
 {
  for(let x = 0 ; x < width ;x += w)
  {
    push();

    let d = dist(x,z,width/2,height/2);

    let offset = map(d,0,maxD,-PI,PI);

    let a = angle + offset;
    let h = map(sin(a), -1, 1, 100, 300);

    translate(x-width/2, 0 , z-width/2);

    normalMaterial();
    box(w - PI,h,w);

    pop();
  }
}
  angle += 0.1;
}

function imp()
{
 let nnum = w-1;
 if(nnum>0)
 {
   w -=1;
   level ++;
 }
}
function dep()
{
let nL = level - 1;
 if(nL > 0)
 {
   w+=1;
   level --;
 }
}
