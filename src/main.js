'use strict';

function App() {

  let button = document.getElementById("goButton");
  let inputField = document.getElementById("inputField");

  button.addEventListener("click", function(){

    const inputValue = inputField.value.trim();
    
    if(inputValue == "JavaScript"){
      window.location.href = "./javaScript.html";
    }
    if(inputValue == "Rust"){
      console.log("Hiii");
    }
    if(inputValue == "Lua"){
      console.log("Hiii");
    }
    if(inputValue == "Python"){
      console.log("Hiii");
    }
    if(inputValue == "React"){
      console.log("Hiii");
    }
    if(inputValue == "C#"){
      console.log("Hiii");
    }
    if(inputValue == "CSS"){
      console.log("Hiii");
    }
    if(inputValue == "HTML"){
      console.log("Hiii");
    }
  });



  function wordCheck(input){
    
  }

}

App();
