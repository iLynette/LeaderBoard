import './style.css';
import fetchData from './modules/display.js';

const refreshBtn = document.getElementById('refresh');
const form = document.querySelector('form');
const name = document.getElementById('userName');
const score = document.getElementById('userScore');
const id = 'myId';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

const apiHandler = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset= UTF-8',
      },
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
    });
    form.reset();
  });
};

apiHandler();

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetchData();
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  fetchData();
});