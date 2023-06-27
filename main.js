let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #F3B0C3;">Creo sitios web y estudio lengua y literatura hispánicas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
  
