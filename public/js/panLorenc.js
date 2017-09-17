/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $("#questionForm").submit(panLorenc);
    $("#askQuestion").click(panLorenc);
    $("#reloadPageButton").click(function() {
        location.reload();
    }
            );
});

function panLorenc(){
      if(!$("#questionText").val()){
          alert("Co to je za otázku, jako?");
      }
      else{
      $("#answerText").text(answer());
      $("#panLorenc").attr("src","./images/panLorenc2.jpg");
      $("#question").hide();
      $("#answer").show();
      }
};
  
function answer(){
    if (Math.random()>=0.5){
        return "Jóóóó!";
    }
    else {
        return "Néééé!";
    };
};


