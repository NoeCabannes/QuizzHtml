// Démarre le minuteur
function startTimer() {
  // Utilise setInterval pour exécuter une fonctiontoutes les 1000ms (1 seconde)
  timerInterval = setInterval(()  => {
	// Diminue la valeur de timeLeft de 1
    timeLeft--;
	// Renvoie en mettant à jour l'affichage du temps restant dans l'élément HTML avec l'ID "timer"
    timerElement.textContent = timeLeft;
	// Si le temps restant est inférieur ou égal à 20, ajoute la classe "red" à l'élément HTML avec l'ID "timer"
    if (timeLeft <= 20) {
      timerElement.classList.add('red');
    }
  }, 1000);
}

// Arrête le minuteur
function stopTimer() {
  // Utilise clearInterval pour arrêter l'exécution de setInterval
  clearInterval(timerInterval);
}

// R&cupère ll'élément HTML avec la balise "header"
const header = document.querySelector('header');

// Ajoute un écouteur d'événement de définement de fenêtre
window.addEventListener('scroll', () => {
  // Si la valeur de window.scrollY (la distance de défilement vertical) est supérieure à 10, ajoute la classe "scrolled" à l'élément HTML "header"
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
	// Sinon, enlève la classe "scrolled" de l'élément HTML "header"
    header.classList.remove('scrolled');
  }
});

// Récupère l'élément HTML avec l'ID "quiz-from"
const form = document.getElementById('quiz-form');

// Récupère l'élément HTML avec l'ID "timer"
const timerElement = document.getElementById('timer');
// Définit la valeur de timerleft à 100
let timeLeft = 100;

// Déclare la variable timerInterval qui sera utilisée pour l'exécution de setInterval
let timerInterval;

// Démarre le minuteur lorque la page est chargée
document.addEventListener('DOMContentLoaded', startTimer);

// Arrête le minuteur lorque le bouton "submit" est cliqué
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', stopTimer);

// Récupère l'élément HTML avec l'ID "result"
const result = document.getElementById('result');

// Ajoute un écouteur d'évènement de soumission du formulaire. Cette partie s'occupe, lorque le bouton submit/Valider est appuyé, de vérifier les bonnes réponses, d'ajouter 1 à correctAnswers et de retourner le nombre de bonnes réponses.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let correctAnswers = 0;
  if (form.elements.answer1.value === 'Le 17') {
    correctAnswers++;
  }
  if (form.elements.answer2.value === 'Brasilia') {
    correctAnswers++;
  }
  if (form.elements.answer3.value == 26) {
    correctAnswers++;
  }
  if (form.elements.answer4.value === 'Neil Armstrong') {
    correctAnswers++;
  }
  if (form.elements.answer5.value === 'Italie') {
    correctAnswers++;
  }
  if (form.elements.answer6.value === 'Léonard de Vinci') {
    correctAnswers++;
  }
  if (form.elements.answer7.value.toLowerCase() === 'emmanuel macron') {
    correctAnswers++;
  }
  
  
  if (form.elements.answer81.checked
     && form.elements.answer84.checked
	 && !form.elements.answer82.checked
	 && !form.elements.answer83.checked
	 && !form.elements.answer85.checked) {
    correctAnswers++;
  }
  if (form.elements.answer9.value === '1789-07-14') {
    correctAnswers++;
  }
  if (form.elements.premiereSingulier.value === 'ds'
  && form.elements.deuxiemeSingulier.value === 'ds'
  && form.elements.troisiemeSingulier.value === 'd'
  && form.elements.premierePluriel.value === 'ons'
  && form.elements.deuxiemePluriel.value === 'ez'
  && form.elements.troisiemePluriel.value === 'nent') {
  correctAnswers++;
  }
  
  result.textContent = `Vous avez ${correctAnswers} bonnes réponses sur 10.`;
});


