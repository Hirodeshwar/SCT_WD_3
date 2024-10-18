// script.js
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

document.getElementById('resetButton').addEventListener('click', resetGame);

function handleCellClick(event) {
    const index = event.target.getAttribute('data-index');
    if (gameState[index] === '') {
        gameState[index] = currentPlayer;
        event.target.innerHTML = currentPlayer === 'X' ? '<div class="x-mark">X</div>' : '<div class="o-mark">O</div>';
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const playerXName = document.getElementById('playerX').value || 'Player X';
    const playerOName = document.getElementById('playerO').value || 'Player O';

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            const winnerName = gameState[a] === 'X' ? playerXName : playerOName;
            alert(`${winnerName} Wins!`);
            resetGame();
            return;
        }
    }
    
    if (!gameState.includes('')) {
        alert("It's a Draw!");
        resetGame();
    }
}

function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerHTML = ''; // Clear the cell content
    });

    // Optionally clear the player inputs if you want
    document.getElementById('playerX').value = '';
    document.getElementById('playerO').value = '';
}
