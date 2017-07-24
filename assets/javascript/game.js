

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
    var fx;
    var counter = 0;
    

         
    
    // FUNCTIONS
    // ==========================================================================
  
    $("#launchbutton").on("click", function () {    
    sound.play();
    });
    
    function redirectHandler() {
    window.location = "gamemain.html";
    
    }

    audio.addEventListener('ended', redirectHandler, false);

    function scrollWin() {
    window.scrollTo(0, 1000);
    }


    function obiTalk () {
    fx = new Audio();
    fx.src = "assets/sounds/disturbance_force.wav";
    fx.play();
    }

    function lukeTalk () {
    fx = new Audio();
    fx.src = "assets/sounds/luke.ogg";
    fx.play();
    }

    function sidiousTalk () {
    fx = new Audio();
    fx.src = "assets/sounds/disturbance_force.wav";
    fx.play();
    }

    function maulTalk () {
    fx = new Audio();
    fx.src = "assets/sounds/disturbance_force.wav";
    fx.play();
    }


        
    
    // MAIN PROCESS
    // ==============================================================================
    
    $(".btn").on("click", function () {
        
        hero = $(this).val();
        
        if (hero === "obiwan" && counter === 0) {
        
        $("#heroName").html("Obi-Wan Kenobi");
        $("#selectedHero").attr({"src": "assets/images/obiwan.jpg", "width": "200"});
        $(this).css({"background-color": "green", "opacity": "0.5", "color": "lightgrey"});
        $(this).prop("disabled",true);
        obiTalk();
        console.log("works")
        console.log(hero);
        console.log(counter);
        $("[value=luke]").css({"background-color": "red", "color": "white"});
        $("[value=sidious]").css({"background-color": "red", "color": "white"});
        $("[value=maul]").css({"background-color": "red", "color": "white"});
        counter++;
        scrollWin();
        }

        else if (hero === "obiwan" && counter >= 1) {

            $("#enemyName").text("Obi-Wan Kenobi");
            $("#selectedEnemy").attr({"src": "assets/images/obiwan.jpg", "width": "200"});
            $(".hero-button").prop("disabled",true);
            scrollWin();
        }
       

        if (hero === "luke" && counter === 0) {
        $("#heroName").text("Luke Skywalker");
        $("#selectedHero").attr({"src": "assets/images/luke.png", "width": "200"});
        $(this).css({"background-color": "green", "opacity": "0.5", "color": "lightgrey"});
        $(this).prop("disabled",true);
        console.log("works")
        console.log(hero);
        $("[value=obiwan]").css({"background-color": "red", "color": "white"});
        $("[value=sidious]").css({"background-color": "red", "color": "white"});
        $("[value=maul]").css({"background-color": "red", "color": "white"});
        counter++;
        scrollWin();
        }

        else if (hero === "luke" && counter >= 1) {
            console.log(counter);
            $("#enemyName").text("Luke Skywalker");
            $("#selectedEnemy").attr({"src": "assets/images/luke.png", "width": "200"});
            $(".hero-button").prop("disabled",true);
            scrollWin();
        }
        

        
        if (hero === "sidious" && counter === 0) {
        $("#heroName").text("Darth Sidious");
        $("#selectedHero").attr({"src": "assets/images/sidious.png", "width": "200"});
        $(this).css({"background-color": "green", "opacity": "0.5", "color": "lightgrey"});
        $(this).prop("disabled",true);
        fx = new Audio();
        fx.src = "assets/sounds/destiny.mp3";
        fx.volume = 0.6;
        fx.play();
        console.log("works")
        console.log(hero);
        $("[value=luke]").css({"background-color": "red", "color": "white"});
        $("[value=obiwan]").css({"background-color": "red", "color": "white"});
        $("[value=maul]").css({"background-color": "red", "color": "white"});
        counter++;
        scrollWin();
        }

        else if (hero === "sidious" && counter >= 1) {

            $("#enemyName").text("Darth Sidious");
            $("#selectedEnemy").attr({"src": "assets/images/sidious.png", "width": "200"});
            $(".hero-button").prop("disabled",true);
            scrollWin();
    
        }
        
        if (hero === "maul" && counter === 0) {
        $("#heroName").text("Darth Maul");
        $("#selectedHero").attr({"src": "assets/images/maul.jpeg", "width": "200"});
        $$(this).css({"background-color": "green", "opacity": "0.5", "color": "lightgrey"});
        $(this).prop("disabled",true);
        fx = new Audio();
        fx.src = "assets/sounds/revenge.mp3";
        fx.play();
        console.log("works")
        console.log(hero);
        $("[value=luke]").css({"background-color": "red", "color": "white"});
        $("[value=sidious]").css({"background-color": "red", "color": "white"});
        $("[value=obiwan]").css({"background-color": "red", "color": "white"});
        counter++;
        scrollWin();
        }

        else if (hero === "maul" && counter >= 1) {

            $("#enemyName").text("Darth Maul");
            $("#selectedEnemy").attr({"src": "assets/images/maul.jpeg", "width": "200"});
            $(".hero-button").prop("disabled",true);
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
    