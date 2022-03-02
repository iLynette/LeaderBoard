const fetchData = async () => {
    const leaderboard = document.getElementById('list');
    const id ='myId';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    const game = await fetch(url);
    const list = await game.json();
    leaderboard.innerHTML = '';
    list.result.forEach((event) => {
        leaderboard.innerHTML += `<li class='score'>${event.user} : ${event.score} </li>`;
    });
};

export default fetchData;