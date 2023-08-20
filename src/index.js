const leaderboardData = [
  { name: 'Name', score: 100 },
  { name: 'Name', score: 45 },
  { name: 'Name', score: 27 },
  { name: 'Name', score: 57 },
  { name: 'Name', score: 27 },
  { name: 'Name', score: 10 },
];

const leaderBoardBody = document.querySelector('.table-body');
const leaderboard = leaderboardData.map((data) => `
    <tr>
      <td scope="row">${data.name}:</td>
      <td>${data.score}</td>
    </tr>
  `).join('');

leaderBoardBody.innerHTML = leaderboard;