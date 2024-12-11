const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function () {
  const number1 = document.querySelector('#number1').value; // Corrected to .value
  const number2 = document.querySelector('#number2').value; // Corrected to .value

  const sum = parseFloat(number1) + parseFloat(number2);

  console.log(sum);

  const parentElement = document.querySelector('#main');
  const newElement = document.createElement('h3');
  newElement.textContent = sum;
  parentElement.appendChild(newElement);
});
