

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
    var player1;
    var fx;
    var counter = 0;
    var p1Attack = 0;
    var p1Armor;
    var p1Hp;
    var compAttack = 0;
    var compArmor;
    var compHp;
    

         
    
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

    function saber() {
    fx = new Audio();
    fx.src = "assets/sounds/light_saber.wav";
    fx.play();
    };

    function heroSelect() {

        $("#heroName").html("Player: " + hero); 
        $("#selectedHero").css({"border": "4px solid green", "border-radius": "10px"});   
        $(selection).css({"background-color": "green", "opacity": "0.5", "color": "lightgrey"});
        $(selection).prop("disabled",true);
        counter++;
        $("#vs").text("Versus");
        player1 = hero;
    };

    function enemySelect() {

        $("#enemyName").text("Enemy: " + hero);
        $(".hero-button").prop("disabled",true);
        $("#selectedEnemy").css({"border": "4px solid #D9534F", "border-radius": "10px"});
        setTimeout( function(){
            $(".btn-danger").css("display", "inline")
            $("#attack").text("Attack");
            $(".actionBox").css("display", "inline")
        }, 4000);
        counter++;

    };

    function iconInverse(){

        $(".heartIcons").attr({"src": "assets/images/heart.png"});
        $(".swordIcons").attr("src", "assets/images/sword.png");
        $(".shieldIcons").attr("src", "assets/images/shield.png");
    };

    function heroPop(){

       
        $(".hero-button").prop("disabled",true);
        setTimeout( function(){
           $(".popContainer").empty();
           $(".hero-button").prop("disabled",false);
           $(selection).prop("disabled",true);
        
        }, 4000)};

    function fightAction() {

        if (player1 === "Obi-Wan Kenobi" && hero === "Luke Skywalker") {
            
            saber();
            setTimeout( function(){
            p1Attack = p1Attack + (Math.floor(Math.random() * 2) + 8);
            compAttack = ((Math.floor(Math.random() * 2) + 6) - p1Armor);
            p1Hp = p1Hp - compAttack;
            compHp = compHp - p1Attack;


            alert("You hit for " + p1Attack + "!");
            alert(hero + " counterattacks for " + compAttack + "!");
            alert("Your HP is " + p1Hp + " .");
            $(".duelHp").html(p1Hp);
            alert(hero + "'s HP is " + compHp + " .");
            $(".compHp").html(compHp);
            }, 400)};
    };
    

    

    
    
    // MAIN PROCESS
    // ==============================================================================
    
    $(".hero-button").on("click", function () {
        
        hero = $(this).val();
        selection = this;
        
        if (hero === "Obi-Wan Kenobi" && counter === 0) {
        
        heroSelect();
        obiTalk();
        $("#selectedHero").attr({"src": "assets/images/obiwan.jpg", "width": "200"});
        $("[value='Luke Skywalker']").css({"background-color": "#D9534F", "color": "white"});
        $("[value='Darth Sidious']").css({"background-color": "#D9534F", "color": "white"});
        $("[value='Darth Maul']").css({"background-color": "#D9534F", "color": "white"});
        $(".popContainer").append('<img id="pop" src="" />');
        $("#pop").attr({"class": "w3-container w3-center w3-animate-zoom", "src": "assets/images/obiwan.jpg", "width": "55%"}); 
        heroPop();
        iconInverse();
        scrollWin();
        $(".duelHeartIcons").css("display", "inline");
        $(".duelSwordIcons").css("display", "inline");
        $(".duelShieldIcons").css("display", "inline");
        $(".duelHp").html("120");
        $(".duelAttack").html("8 - 10");
        $(".duelShield").html("4");
        p1Hp = 120;
        p1Armor = 4;
        }

        else if (hero === "Obi-Wan Kenobi" && counter === 1) {

            enemySelect();
            
            $("#selectedEnemy").attr({"src": "assets/images/obiwan.jpg", "width": "200"});
            $(".popContainer").append('<img id="pop" src="" />');
            $("#pop").attr({"class": "w3-container w3-center w3-animate-zoom", "src": "assets/images/obiwan.jpg", "width": "55%"}); 
        
            heroPop();
            obiTalk();
            scrollWin();
            $(".compHeartIcons").css("display", "inline");
            $(".compSwordIcons").css("display", "inline");
            $(".compShieldIcons").css("display", "inline");
            $(".compHeartIcons").html(": 120");
            $(".compSwordIcons").html(": 8 - 10");
            $(".compShieldIcons").html(": 4");
            $(".compHp").html("120");
            $(".compAttack").html("8 - 10");
            $(".compShield").html("4");
            compHp = 120;
            compArmor = 4;
      
        }
       

        if (hero === "Luke Skywalker" && counter === 0) {
        
        heroSelect();
        lukeTalk();

        $("#selectedHero").attr({"src": "assets/images/luke.png", "width": "200"});
        $("[value='Obi-Wan Kenobi']").css({"background-color": "#D9534F", "color": "white"});
        $("[value='Darth Sidious']").css({"background-color": "#D9534F", "color": "white"});
        $("[value='Darth Maul']").css({"background-color": "#D9534F", "color": "white"});
        $(".popContainer").append('<img id="pop" src="" />');
        $("#pop").attr({"class": "w3-container w3-center w3-animate-zoom", "src": "assets/images/luke.png", "width": "55%"}); 
       
        heroPop();
        iconInverse();
        scrollWin();
        $(".duelHeartIcons").attr("src", "assets/images/heart_black.png");
        $(".duelSwordIcons").attr("src", "assets/images/sword_black.png");
        $(".duelShieldIcons").attr("src", "assets/images/shield_black.png");
        $(".duelHp").html("100");
        $(".duelAttack").html("6 - 8");
        $(".duelShield").html("6");
        p1Hp = 100;
        p1Armor = 6;
        }

        else if (hero === "Luke Skywalker" && counter === 1) {
            
            enemySelect();
            $("#selectedEnemy").attr({"src": "assets/images/luke.png", "width": "200"});
            $(".popContainer").append('<img id="pop" src="" />');
            $("#pop").attr({"class": "w3-container w3-center w3-animate-zoom", "src": "assets/images/luke.png", "width": "55%"}); 
        
            heroPop();
            lukeTalk();
            scrollWin();
            $(".compHeartIcons").attr("src", "assets/images/heart_black.png");
            $(".compSwordIcons").attr("src", "assets/images/sword_black.png");
            $(".compShieldIcons").attr("src", "assets/images/shield_black.png");
            $(".compHp").html("100");
            $(".compAttack").html("6 - 8");
            $(".compShield").html("6");  
            compHp = 100;
            compArmor = 6;

            
 
        }
        

        
        if (hero === "Darth Sidious" && counter === 0) {
        
        heroSelect();
        sidiousTalk();

        $("#selectedHero").attr({"src": "assets/images/sidious.png", "width": "200"});  
        $("[value='Luke Skywalker']").css({"background-color": "#D9534F", "color": "white"});
        $("[value='Obi-Wan Kenobi']").css({"background-color": "#D9534F", "color": "white"});
        $("[value='Darth Maul']").css({"background-color": "#D9534F", "color": "white"});
        $(".popContainer").append('<img id="pop" src="" />');
        $("#pop").attr({"class": "w3-container w3-center w3-animate-zoom", "src": "assets/images/sidious.png", "width": "55%"}); 
       
        heroPop();
        iconInverse();
        scrollWin();
        $(".duelHeartIcons").attr("src", "assets/images/heart_black.png");
        $(".duelSwordIcons").attr("src", "assets/images/sword_black.png");
        $(".duelShieldIcons").attr("src", "assets/images/shield_black.png");
        $(".duelHp").html("150");
        $(".duelAttack").html("10 - 13");
        $(".duelShield").html("0");
        p1Hp = 150;
        p1Armor = 0;
        }

        else if (hero === "Darth Sidious" && counter === 1) {

            enemySelect();
            $("#selectedEnemy").attr({"src": "assets/images/sidious.png", "width": "200"});
            $(".popContainer").append('<img id="pop" src="" />');
            $("#pop").attr({"class": "w3-container w3-center w3-animate-zoom", "src": "assets/images/sidious.png", "width": "55%"}); 
        
            sidiousTalk();
            heroPop();
            scrollWin();
            $(".compHeartIcons").attr("src", "assets/images/heart_black.png");
            $(".compSwordIcons").attr("src", "assets/images/sword_black.png");
            $(".compShieldIcons").attr("src", "assets/images/shield_black.png");
            $(".compHp").html("150");
            $(".compAttack").html("10 - 13");
            $(".compShield").html("0");
            compHp = 150;
            compArmor = 0;
    
        }
        
        if (hero === "Darth Maul" && counter === 0) {
        
        heroSelect();
        maulTalk();

        $("#selectedHero").attr({"src": "assets/images/maul.jpeg", "width": "200"});
        $("[value='Luke Skywalker']").css({"background-color": "#D9534F", "color": "white"});
        $("[value='Darth Sidious']").css({"background-color": "#D9534F", "color": "white"});
        $("[value='Obi-Wan Kenobi']").css({"background-color": "#D9534F", "color": "white"});
        $(".popContainer").append('<img id="pop" src="" />');
        $("#pop").attr({"class": "w3-container w3-center w3-animate-zoom", "src": "assets/images/maul.jpeg", "width": "55%"}); 

       
        heroPop();
        
        iconInverse();
        scrollWin();
        $(".duelHeartIcons").attr("src", "assets/images/heart_black.png");
        $(".duelSwordIcons").attr("src", "assets/images/sword_black.png");
        $(".duelShieldIcons").attr("src", "assets/images/shield_black.png");
        $(".duelHp").html("180");
        $(".duelAttack").html("9 - 11");
        $(".duelShield").html("2");
        p1Hp = 180;
        p1Armor = 2;
        }

        else if (hero === "Darth Maul" && counter === 1) {

            enemySelect();
            $("#selectedEnemy").attr({"src": "assets/images/maul.jpeg", "width": "200"});
            $(".popContainer").append('<img id="pop" src="" />');
            $("#pop").attr({"class": "w3-container w3-center w3-animate-zoom", "src": "assets/images/maul.jpeg", "width": "55%"}); 

            maulTalk();
            heroPop();
            scrollWin();
            $(".compHeartIcons").attr("src", "assets/images/heart_black.png");
            $(".compSwordIcons").attr("src", "assets/images/sword_black.png");
            $(".compShieldIcons").attr("src", "assets/images/shield_black.png");
            $(".compHp").html("180");
            $(".compAttack").html("9 - 11");
            $(".compShield").html("2");
            compHp = 180;
            compArmor = 2;
        }
        
    
    });

    $(".clear").on("click", function () {
              
        location.reload();
        window.scrollTo(0, 0);

    });

    $(".btn-danger").on("click", function () {

        if (duelHp > 0 && compHp > 0) { 

            fightAction();

        }

        else {

            $(".btn-button").prop("disabled",true);

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
    