const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML =` please give valid HEIGHT`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML =` please give valid Weight`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.6){
           results.innerHTML = ` You are underweight because your Bmi ${bmi} `
        }else if(bmi > 18.6 || bmi < 24.9){
           results.innerHTML = ` You are Normal because your Bmi ${bmi} `
        }else if(bmi > 24.9){
           results.innerHTML = ` You are overweight because your Bmi ${bmi} `
        }
    }
})