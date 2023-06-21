document.addEventListener("DOMContentLoaded", function() {
    // Obtener el enlace del cuestionario
    var startQuizLink = document.getElementById("startQuizLink");
  
    // Agregar un evento de clic al enlace
    startQuizLink.addEventListener("click", function(e) {
      e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  
      // Llamar a la función para comenzar el cuestionario
      startQuiz();
    });
  
    // Función para iniciar el cuestionario
    function startQuiz() {
      // Pregunta 1
  var respuesta1 = prompt("1. ¿Cuántos Grand Slam ha ganado Federer?");
  if (respuesta1 === "20") {
      console.log("¡Correcto!");
  } else {
      console.log("Incorrecto. La respuesta correcta es 20.");
  }
  
  // Pregunta 2
  var respuesta2 = prompt("2. ¿Cuál es el torneo que Federer ha ganado más veces?");
  if (respuesta2.toLowerCase() === "wimbledon") {
      console.log("¡Correcto!");
  } else {
      console.log("Incorrecto. La respuesta correcta es Wimbledon.");
  }
  
  // Pregunta 3
  var respuesta3 = prompt("3. ¿Cuál es el torneo que más le ha costado ganar a Federer?");
  if (respuesta3.toLowerCase() === "roland garros") {
      console.log("¡Correcto!");
  } else {
      console.log("Incorrecto. La respuesta correcta es Roland Garros.");
  }
  
  // Pregunta 4
  var respuesta4 = prompt("4. ¿Quién ha sido el rival más difícil de Federer?");
  if (respuesta4.toLowerCase() === "rafael nadal") {
      console.log("¡Correcto!");
  } else {
      console.log("Incorrecto. La respuesta correcta es Rafael Nadal.");
  }
  
      // Por ejemplo, puedes mostrar la primera pregunta
      showQuestion();
    }
  });