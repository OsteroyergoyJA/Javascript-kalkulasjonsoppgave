const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function () {
  
  const number1 = document.querySelector('#number1').value; 
  const number2 = document.querySelector('#number2').value;
  const sum = parseFloat(number1) + parseFloat(number2);

  console.log(sum);

  const parentElement = document.querySelector('#main');
  const newElement = document.createElement('h3');
  newElement.textContent = sum;
  parentElement.appendChild(newElement);
});
 
/* Trenger en forklaring på hvorfor number1 og number2 må være innenfor funksjonen, 
trodde de ble definert utenfor også kunne funksjonen hentet de? */