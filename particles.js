const canvas = document.getElementById("particleArt");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

//Particle Object
function Particle(x, y, directionX, directionY, size, color){
  this.x = x; //x position of particle
  this.y = y; //y position of particle
  this.directionX = directionX; //x velocity
  this.directionY = directionY; //y velocity
  this.size = size;
  this.color = color;
}

//Draw method for the Particle
Particle.prototype.draw = function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
}

// Update method to particle. This will update the state of the particle for the animation.
Particle.prototype.update = function(){
  
  //Flip particle direction when they touch the border
  if(this.x + this.size > canvas.width || this.x - this.size < 0) {
    this.directionX = -this.directionX;
  }
  
  if(this.y + this.size > canvas.height || this.y - this.size < 0) {
    this.directionY = -this.directionY;
  }
  
  //move the particle based on velocity
  this.x += this.directionX;
  this.y += this.directionY;
  
  this.draw();
}

//Array of particles
function init() {
  
  let numOfParticles = 10;
  let maxSize = 100;
  let minSize = 10;
  particleArray = [];
  let colorList = ['#ffffff', '#50c9ce', '#ff206e'];
  
  //Generate random attributes for each particle
  for (let i=0; i<numOfParticles; i++){
    //Generate size
    let size = (Math.random() * maxSize) + minSize;
    
    //Generate starting position
    let x = Math.random() * (innerWidth - size * 2);
    let y = Math.random() * (innerHeight - size * 2);
    
    //Generate direction velocity
    let directionY = (Math.random() * .5) - .2;
    let directionX = (Math.random() * .5) - .2;
    
    //Generate color 
    let color = colorList[Math.floor(Math.random() * colorList.length)];
    
    particleArray.push(new Particle (x, y, directionX, directionY, size, color));
  }
}

//animation loop
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0, innerWidth, innerHeight);
  
  for(let i=0; i<particleArray.length; i++){
    particleArray[i].update();
  }
}

init();
animate();

//Avoid particle stretch on different resolutions
window.addEventListener('resize', function(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
})
