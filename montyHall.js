function playMontyHall(toSwitch) {
  let carIn = Math.floor(Math.random() * 3);
  let selectedDoor = Math.floor(Math.random() * 3);

  let revealedDoor = [0, 1, 2].find(
    door => door !== carIn && door !== selectedDoor,
  );

  if (toSwitch) {
    return (
      carIn ===
      [0, 1, 2].find(door => door !== selectedDoor && door !== revealedDoor)
    );
  } else {
    return carIn === selectedDoor;
  }
}

function simulateGame(num, toSwitch) {
  let gamesWon = 0;

  for (let i = 0; i < num; i++) {
    gamesWon += playMontyHall(toSwitch);
  }

  return gamesWon;
}

module.exports = simulateGame

