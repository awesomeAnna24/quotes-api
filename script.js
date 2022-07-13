'use strict';
let name = prompt(`What's your name?`);
document.querySelector('span').innerText = name;
fetch('https://api.goprogram.ai/inspiration')
  .then((res) => res.json())
  .then((data) => {
    document.querySelector('p').innerText = data.quote;
    document.querySelector('h5').innerText = data.author;
    console.log(data);
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
