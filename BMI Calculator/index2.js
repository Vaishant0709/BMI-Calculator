const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); //prevent form from sending data to webserver , as there is no such server currently
  //we take height and weight in event listener as we want values when user submits
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a Valid height`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML += '<br> You Are Under Weight';
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML += '<br> You Are in Normal Range';
    }
    if (bmi >= 24.9) {
      results.innerHTML += '<br> You Are  Over Weight';
    }
  }
});
