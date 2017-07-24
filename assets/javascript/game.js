

$(document).ready(function(){
 
    // VARIABLES
    // ==========================================================================
    // var inputOne = "";
    // var operator;
    // var inputTwo = "";
    // var output = ""; 
    // var counter = 1;
    // var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // var operatorArray = ["+", "-", "*", "/", "^"];

    var sound = document.getElementById("audio");
    var hero;
    var selection;
    var fx;
    var counter = 0;
    

         
    
    // FUNCTIONS
    // ==========================================================================
  
    $("#launchbutton").on("click", function () {    
    sound.play();
    });
    
    function redirectHandler() {
    window.location = "gamemain.html";
    
    };

    audio.addEventListener('ended', redirectHandler, false);

    function scrollWin() {
    window.scrollTo(0, 1000);
    };


    function obiTalk() {
    fx = new Audio();
    fx.src = "assets/sounds/disturbance_force.wav";
    fx.play();
   
    };

    function lukeTalk() {
    fx = new Audio();
    fx.src = "assets/sounds/luke.ogg";
    fx.play();
    };

    function sidiousTalk() {
    fx = new Audio();
    fx.src = "assets/sounds/destiny.mp3";
    fx.play();
    };

    function maulTalk() {
    fx = new Audio();
    fx.src = "assets/sounds/revenge.mp3";
    fx.play();
    };

    function heroSelect() {

        $("#heroName").html("Player: " + hero); 
        $("#selectedHero").css({"border": "4px solid green", "border-radius": "10px"});   
        $(selection).css({"background-color": "green", "opacity": "0.5", "color": "lightgrey"});
        $(selection).prop("disabled",true);
        counter++;
        $("#vs").text("Versus");
    };

    function enemySelect() {

        $("#enemyName").text("Enemy: " + hero);
        $(".hero-button").prop("disabled",true);
        $("#selectedEnemy").css({"border": "4px solid red", "border-radius": "10px"});
        $(".btn-danger").css("display", "inline")
        $("#attack").text("Attack");

    };

        
    
    // MAIN PROCESS
    // ==============================================================================
    
    $(".btn").on("click", function () {
        
        hero = $(this).val();
        selection = this;
        
        if (hero === "Obi-Wan Kenobi" && counter === 0) {
        
        heroSelect();
        obiTalk();
        $("#selectedHero").attr({"src": "assets/images/obiwan.jpg", "width": "200"});
        $("[value='Luke Skywalker']").css({"background-color": "red", "color": "white"});
        $("[value='Darth Sidious']").css({"background-color": "red", "color": "white"});
        $("[value='Darth Maul']").css({"background-color": "red", "color": "white"});
        
        scrollWin();
        }

        else if (hero === "Obi-Wan Kenobi" && counter >= 1) {

            enemySelect();
            $("#selectedEnemy").attr({"src": "assets/images/obiwan.jpg", "width": "200"});
            obiTalk();
            scrollWin();
            
        }
       

        if (hero === "Luke Skywalker" && counter === 0) {
        
        heroSelect();
        lukeTalk();

        $("#selectedHero").attr({"src": "assets/images/luke.png", "width": "200"});
        $("[value='Obi-Wan Kenobi']").css({"background-color": "red", "color": "white"});
        $("[value='Darth Sidious']").css({"background-color": "red", "color": "white"});
        $("[value='Darth Maul']").css({"background-color": "red", "color": "white"});
        scrollWin();
        }

        else if (hero === "Luke Skywalker" && counter >= 1) {
            
            enemySelect();
            $("#selectedEnemy").attr({"src": "assets/images/luke.png", "width": "200"});
            lukeTalk();
            scrollWin();
            
        }
        

        
        if (hero === "Darth Sidious" && counter === 0) {
        
        heroSelect();
        sidiousTalk();

        $("#selectedHero").attr({"src": "assets/images/sidious.png", "width": "200"});  
        $("[value='Luke Skywalker']").css({"background-color": "red", "color": "white"});
        $("[value='Obi-Wan Kenobi']").css({"background-color": "red", "color": "white"});
        $("[value='Darth Maul']").css({"background-color": "red", "color": "white"});
        scrollWin();
        }

        else if (hero === "Darth Sidious" && counter >= 1) {

            enemySelect();
            $("#selectedEnemy").attr({"src": "assets/images/sidious.png", "width": "200"});
            sidiousTalk();
            scrollWin();
    
        }
        
        if (hero === "Darth Maul" && counter === 0) {
        
        heroSelect();
        maulTalk();

        $("#selectedHero").attr({"src": "assets/images/maul.jpeg", "width": "200"});
        $("[value='Luke Skywalker']").css({"background-color": "red", "color": "white"});
        $("[value='Darth Sidious']").css({"background-color": "red", "color": "white"});
        $("[value='Obi-Wan Kenobi']").css({"background-color": "red", "color": "white"});
        scrollWin();
        }

        else if (hero === "Darth Maul" && counter >= 1) {

            enemySelect();
            $("#selectedEnemy").attr({"src": "assets/images/maul.jpeg", "width": "200"});
            maulTalk();
            scrollWin();
        }

        if (hero === "clear") {
      
        location.reload();

        }

        
        
    
    });
    


});
    
    
    // if (numberArray.indexOf($(this).val()) !== -1 && counter === 1) {

    // inputOne = inputOne + ($(this).val());

    // $("#first-number").text(inputOne);
 
    // console.log("1st" + counter);
    
    // }
    
    // if (operatorArray.indexOf($(this).val()) !== -1 && inputOne !== "" && counter > 0) {
        
    // operator = ($(this).val());

    // $("#operator").text(operator);

    // counter++;

    // console.log("operator" + counter);

    // }


    // if (numberArray.indexOf($(this).val()) !== -1 && counter >= 2) {

    // inputTwo = inputTwo + ($(this).val());

    // $("#second-number").text(inputTwo);


    // console.log("2nd" + counter);

    // }

    // if (($(this).val()) === "equals" && inputTwo !== "") {

    // counter = counter - 100000;

    //     if (operator === "+") { 

    //         output = +inputOne + +inputTwo;

    //         $("#result").text(output);

    //         }

    //     else if (operator === "-") { 

    //         output = inputOne - inputTwo;

    //         $("#result").text(output);

    //         }

    //     else if (operator === "*") { 

    //     output = inputOne * inputTwo;

    //     $("#result").text(output);

    //         }

    //     else if (operator === "/") { 

    //     output = inputOne / inputTwo;

    //     $("#result").text(output);

    //         }

    //     else if (operator === "^") { 

    //     output = Math.pow(inputOne, inputTwo);

    //     $("#result").text(output);

    //         }

    // }

    // if (($(this).val()) === "clear") {
    //     $("#first-number").empty();
    //     $("#operator").empty();
    //     $("#second-number").empty();
    //     $("#result").empty();
    //     inputOne = "";
    //     inputTwo = "";
    //     counter = 1;

    // }
    

  

 
    // });
    // });   
    