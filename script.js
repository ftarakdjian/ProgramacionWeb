document.addEventListener("DOMContentLoaded", function() {
    var startQuizLink = document.getElementById("startQuizLink");
    var quizContainer = document.getElementById("quizContainer");
    startQuizLink.addEventListener("click", function(e) {
      e.preventDefault();
      startQuiz();
    });
  
    function startQuiz() {
      var questions = [
        {
          question: "1. ¿Cuántos Grand Slam ha ganado Federer?",
          answer: "20"
        },
        {
          question: "2. ¿Cuál es el torneo que Federer ha ganado más veces?",
          answer: "Wimbledon"
        },
        {
          question: "3. ¿Cuál es el torneo que más le ha costado ganar a Federer?",
          answer: "Roland Garros"
        },
        {
          question: "4. ¿Quién ha sido el rival más difícil de Federer?",
          answer: "Rafael Nadal"
        }
      ];
  
      var quizHTML = "";
      for (var i = 0; i < questions.length; i++) {
        var respuesta = prompt(questions[i].question);
        var esCorrecta = false;
        if (respuesta !== null && respuesta.toLowerCase() === questions[i].answer.toLowerCase()) {
          esCorrecta = true;
        }
  
        quizHTML += "<p>Pregunta: " + questions[i].question + "</p>";
        quizHTML += "<p>Tu respuesta: " + respuesta + "</p>";
        quizHTML += "<p>Respuesta correcta: " + questions[i].answer + "</p>";
        quizHTML += "<p>¿Es correcta? " + (esCorrecta ? "Sí" : "No") + "</p>";
        quizHTML += "<hr>";
      }
  
      quizContainer.innerHTML = quizHTML;
    }
  });
  
  