const players = ["John", "Bob", "Alice", "Poppy"]; // #300

const person = { // #1000
  name: "John Doe",
  age: 80,
};

let team = players ; // team = #300
let team1 = [...players]; // team1 = #500


let cap1 = {...person} ; // #450

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
