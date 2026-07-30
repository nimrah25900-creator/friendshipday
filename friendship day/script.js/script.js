function celebrate(){

document.getElementById("wish").innerHTML =
"💖 Wishing you endless happiness and lifelong friendship! 💖";

confetti({

particleCount:180,

spread:120,

origin:{y:0.6}

});

setTimeout(()=>{

confetti({

particleCount:150,

angle:60,

spread:80,

origin:{x:0}

});

confetti({

particleCount:150,

angle:120,

spread:80,

origin:{x:1}

});

},500);

}