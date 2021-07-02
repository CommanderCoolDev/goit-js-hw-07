const font = document.getElementById('font-size-control');
const txt = document.getElementById('text');

font.addEventListener('input', (event) => 
txt.style.fontSize = `${event.currentTarget.value}px`
);



  
