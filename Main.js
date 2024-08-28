'use strict';
//JavaScript Fundamentals – Part 1
/*
--> Coding Challenge #1
let markHeight = 1.69;
let johnHeight = 1.95;
let markMass = 78;
let johnMass = 92;
// let markHeight = 1.88;
// let johnHeight = 1.76;
// let markMass = 95;
// let johnMass = 85;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

console.log(markBmi, johnBmi);
const markHeigherBMI = markBmi > johnBmi;
console.log(markHeigherBMI);

--> Coding Challenge # 2
if (markBmi > johnBmi) {
	console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
	console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
}


--> Coding Challenge #3

const DolphinsOneTime = 97;
const DolphinsSecondTime = 112;
const DolphinsThirdTime = 101;

const KoalasOneTime = 109;
const KoalasSecondTime = 95;
const KoalasThirdTime = 106;

const AverageDolphins =
	(DolphinsOneTime + DolphinsSecondTime + DolphinsThirdTime) / 3;

const AverageKoalas = (KoalasOneTime + KoalasSecondTime + KoalasThirdTime) / 3;

console.log(
	`AverageDolphins = ${AverageDolphins}  AverageKoalas = ${AverageKoalas}`
);

// if (AverageDolphins > AverageKoalas) {
// 	console.log("Dolphins Win!");
// } else if (AverageDolphins < AverageKoalas) {
// 	console.log("Koalas Win!");
// } else {
// 	console.log("Draw!");
// }

if (AverageDolphins > AverageKoalas && AverageDolphins >= 100) {
	console.log("Dolphins Win!");
} else if (AverageDolphins < AverageKoalas && AverageKoalas >= 100) {
	console.log("Koalas Win!");
} else if (
	AverageDolphins === AverageKoalas ||
	(AverageDolphins >= 100 && AverageKoalas >= 100)
) {
	console.log("Draw!");
} else {
	console.log("No One Win!");
}


--> Coding Challenge #4

const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`Bill = ${bill} , Tip = ${tip} , Final Value = ${bill + tip}`);
*/

// JavaScript Fundamentals – Part 2
/*
--> Coding Challenge #1

CalcAverage = (TimeOne, TimeTwo, TimeThree) =>
	(TimeOne + TimeTwo + TimeThree) / 3;

const DolphinsScore = CalcAverage(85, 54, 41);
const KoalasScore = CalcAverage(23, 34, 27);

function checkWinner(DolphinsScore, KoalasScore) {
	if (DolphinsScore >= KoalasScore * 2) {
		console.log(`Dolphins win (${DolphinsScore} VS. ${KoalasScore})`);
	} else if (KoalasScore >= DolphinsScore * 2) {
		console.log(`Koalas win (${KoalasScore} VS. ${DolphinsScore})`);
	} else {
		console.log("No Team Wins..");
	}
}

checkWinner(DolphinsScore, KoalasScore);

--> Coding Challenge #2
const calcTip = (bill) => {
	if (bill >= 50 && bill <= 300) {
		return 0.15 * bill;
	} else {
		return 0.2 * bill;
	}
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);


--> Coding Challenge in video 

Jonas = {
	firstName: "Jonas",
	lastName: "Schtidmenn",
	hasDriverlicense: false,
	birthyear: 1991,
	CalcAge: function () {
		this.age = 2037 - this.birthyear;
		return this.age;
	},
	getSummry: function () {
		return `${Jonas.firstName} is a ${this.age}-years old , and ${
			this.hasDriverlicense
			? "hea has a driver's license"
			: "hea has no driver's license"
		}`;
	}
};
console.log(Jonas.CalcAge());
console.log(Jonas.age);
console.log(Jonas.getSummry());


--> Coding Challenge #3
Mark = {
	firstName: "Mark",
	lastName: "Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		return (this.BMI = this.mass / this.height ** 2);
	}
};

John = {
	firstName: "John",
	lastName: "Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		return (this.BMI = this.mass / this.height ** 2);
	}
};

console.log(
	John.BMI > Mark.BMI
	? `${John.firstName}'s BMI (${John.calcBMI()}) is higher than ${
		Mark.firstName
	}'s (${Mark.calcBMI()})!`
	: `${Mark.firstName}'s BMI (${Mark.calcBMI()}) is higher than ${
		John.firstName
	}'s (${John.calcBMI()})!`
	);

	--> Coding Challenge #4
	const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
	
	const tips = [];
	const total = [];
	const calcTip = (bill) => {
		if (bill >= 50 && bill <= 300) {
			return 0.15 * bill;
		} else {
			return 0.2 * bill;
		}
	};
	
	for (let i = 0; i < bills.length; i++) {
		tips.push(calcTip(bills[i]));
		total.push(calcTip(bills[i]) + bills[i]);
	}
	
	console.log(tips);
	console.log(total);
	
	function CalcAverage(arr) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		const average = sum / arr.length;
		
		return average;
	}
	
	console.log(CalcAverage(total));
	*/

// Developer Skills & Editor Setup
/*
	--> Coding Challenge #1

	const Data1 = [17, 21, 23];
	const Data2 = [12, 5, -5, 0, 4];
	function printForecast(arr) {
		let desc = "";
		for (let day = 0; day < arr.length; day++) {
			desc += `${arr[day]}ºC in ${day + 1} days ... `;
		}
		console.log(`... ${desc}`);
	}
	
	printForecast(Data2);
*/

// JS Engine: Program that excutes JS Code

/*
The call stack :
 is where our code actually excuted using something called execution contexts.
** How the code is compiled to machine code so that it actually can be excuted afterwards.




The heap :
 is an unstructured memory pool which stores all the objects that our app needs.

*/
// Data Structures, Modern Operators and Strings  Section
// Challenge #1
// const game = {
// 	team1: "Bayern Munich",
// 	team2: "Borrussia Dortmund",
// 	players: [
// 		[
// 			"Neuer",
// 			"Pavard",
// 			"Martinez",
// 			"Alaba",
// 			"Davies",
// 			"Kimmich",
// 			"Goretzka",
// 			"Coman",
// 			"Muller",
// 			"Gnarby",
// 			"Lewandowski"
// 		],
// 		[
// 			"Burki",
// 			"Schulz",
// 			"Hummels",
// 			"Akanji",
// 			"Hakimi",
// 			"Weigl",
// 			"Witsel",
// 			"Hazard",
// 			"Brandt",
// 			"Sancho",
// 			"Gotze"
// 		]
// 	],
// 	score: "4:0",
// 	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// 	date: "Nov 9th, 2037",
// 	odds: {
// 		team1: 1.33,
// 		x: 3.25,
// 		team2: 6.5
// 	}
// };
// // 1.
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// // 5.
// // const { team1, x: draw, team2 } = game.odds;
// const {
// 	odds: { team1, x: draw, team2 }
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
// 	console.log(`${players.length} Goal scored`);
// 	for (let i = 0; i < players.length; i++) {
// 		console.log(`${players[i]}`);
// 	}
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log("Team 1 is more likely to win");

// // Challenge #2
// // 1.
// for (const [numplayer, player] of game.scored.entries()) {
// 	console.log(`Goal ${numplayer + 1}: ${player}`);
// }

// // 2.
// let avgodds = 0;
// for (const odd of Object.values(game.odds)) {
// 	avgodds += odd;
// }
// console.log(avgodds / Object.values(game.odds).length);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
// 	const teamstr = team === "x" ? "draw" : `victory ${game[team]}`;
// 	console.log(`Odd of ${teamstr}: ${odd}`);
// }

// // 4.

// const scorers = {};
// for (const player of game.scored) {
// 	scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// // Coding Challenge #3

// const gameEvents = new Map([
// 	[17, "⚽ GOAL"],
// 	[36, "🔄️ Substitution"],
// 	[47, "⚽ GOAL"],
// 	[61, "🔄️ Substitution"],
// 	[64, "🟡 Yellow card"],
// 	[69, "🔴 Red card"],
// 	[70, "🔄️ Substitution"],
// 	[72, "🔄️ Substitution"],
// 	[76, "⚽ GOAL"],
// 	[80, "⚽ GOAL"],
// 	[92, "🟡 Yellow card"]
// ]);

// 1.
// const events = [];
// const eventsset = new Set(gameEvents.values());
// for (const event of eventsset) {
// 	events.push(event);
// }
// console.log(events);
// console.log(eventsset);

// another way
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// console.log(
// 	`An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, event] of gameEvents) {
// 	console.log(`[ ${min <= 45 ? "FIRST" : "SECOND"} HALF] ${min}: ${event}`);
// }

// Coding Challenge #4

// document.body.append(document.createElement("textarea"));
// const button = document.createElement("button");
// button.innerText = "click me";
// document.body.append(button);

// 1.
// const textConverted = function () {
// const text = document.querySelector("textarea").value.trim().split("_");
// console.log(
// 	text[0].toLowerCase() +
// 		text[1][0].toUpperCase() +
// 		text[1].slice(1).toLowerCase()
// );
// const text = document.querySelector("textarea").value;
// const underscoreText = text.split("\n");
// console.log(underscoreText);

// for (const [i, txt] of underscoreText.entries()) {
// 	const output = txt.split("_");
// 	const result = (
// 		output[0].toLowerCase() +
// 		output[1][0].toUpperCase() +
// 		output[1].slice(1).toLowerCase()
// 	).trim();
// 	console.log(result.padEnd(20, " ") + "✅".repeat(i + 1));
// const [first, second] = txt.toLowerCase().trim().split("_");
// const output = `${first}${second.replace(
// 	second[0],
// 	second[0].toUpperCase()
// )}`;
// console.log(output);
// 	}
// };
// button.addEventListener("click", textConverted);

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// Practice
// const flights =
// 	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const res = flights.split("+");
// console.log(res);
// for (const [i, flight] of res.entries()) {
// 	const flightsarrs = res[i].split("_").join(" ").trim().split(";");
// 	const output = `${
// 		res[0].length >= res[i].length && i % 2 == 0
// 			? ` ${" ".repeat(res[0].length - res[i].length)}🔴`
// 			: ` ${" ".repeat(res[0].length - res[i].length) + 25}`
// 	} ${flightsarrs[0]} from ${flightsarrs[1]
// 		.slice(0, 3)
// 		.toLocaleUpperCase()} to ${flightsarrs[2]
// 		.slice(0, 3)
// 		.toLocaleUpperCase()} (${flightsarrs[3].replace(":", "h")})`;

// 	console.log(output);
// }

// const transformString = function (str) {
// 	const [first, second] = str.split(" ");
// 	return `${first.toLowerCase()}${second[0].toUpperCase()}${second
// 		.slice(1)
// 		.toLowerCase()}`;
// };

// const putStringToTransform = function (str, fn) {
// 	console.log(`Before Transform: ${str}`);
// 	console.log(`After Transform: ${fn(str)}`);
// };

// putStringToTransform("Hello World", transformString);

// /**
//   transformString is :
// 	-  lower abstract function
// 	-  named callback function
// 	putStringToTransform is :
// 	-  higher abstract function
// 	- higher order function
//  */

// // const greet = function (greeting) {
// // 	return function (name) {
// // 		console.log(`${greeting} ${name}`);
// // 	};
// // };

// // const greetinghay = greet("Hay");
// // greetinghay("Usef");

// // const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// // greet("Hay")("Mohamed");

// // console.log("");

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addVAT2 = function (rate = 0.23) {
// 	return function (value) {
// 		return value + value * rate;
// 	};
// };
// const addVAT3 = addVAT2(undefined);
// console.log(addVAT3(100));

// // A Closer Look at Functions

// // Coding Challenge #1
// const poll = {
// 	question: "What is your favourite programming language?",
// 	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// 	// This generates [0, 0, 0, 0]. More in the next section!
// 	answers: new Array(4).fill(0),

// 	registerNewAnswer() {
// 		const answer = Number(
// 			prompt(`${this.question}\n${this.options.join("\n")}`)
// 		);

// 		typeof answer === "number" &&
// 			answer < this.answers.length &&
// 			this.answers[answer]++;

// 		this.displayResults();
// 		this.displayResults("string");
// 	},
// 	displayResults(type = "array") {
// 		if (type === "array") {
// 			console.log(this.answers);
// 		} else if (type === "string") {
// 			console.log(`Poll results are ${this.answers.join(", ")}`);
// 		}
// 	}
// };

// // poll.registerNewAnswer();
// document
// 	.querySelector(".show")
// 	.addEventListener("click", poll.registerNewAnswer.bind(poll));

// // const displayResults = function (str) {
// // 	console.log(`Poll results are ${str.join(", ")}`);
// // };

// const Data1 = [5, 2, 3];
// const Data2 = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({ answers: Data2 }, "string");

// (function () {
// 	console.log("call once");
// 	const a = 1;
// 	const b = 2;

// 	console.log(a, b);
// })();

// coding challenge #2
// (function () {
// 	const header = document.querySelector("h1");
// 	header.style.color = "red";

// 	document.querySelector("body").addEventListener("click", function () {
// 		header.style.color = "blue";
// 	});
// })();

// const selecth1 = function () {
// 	const header = document.querySelector("h1");
// 	header.style.color = "red";

// 	document.querySelector("body").addEventListener("click", function () {
// 		header.style.color = "blue";
// 	});
// };

// selecth1();

//  working with arrays section

// Array
// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function (i, index, arr) {
//   console.log(`${index}: ${i}`);
// });

// // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// // currenciesUnique.forEach(function (value, key, set) {
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

// const name = 'usef';

// Coding Challenge #1

// const JuliaData1 = [3, 5, 2, 12, 7];
// const KateData1 = [4, 1, 15, 8, 3];
// const JuliaData2 = [9, 16, 6, 8, 3];
// const KateData2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const Juliacopy = dogsJulia.slice();
//   Juliacopy.splice(-2, 2);
//   Juliacopy.splice(0, 1);
//   const alldogs = Juliacopy.concat(dogsKate);
//   alldogs.forEach(function (dog, i) {
//     const output =
//       dog >= 3
//         ? `Dog number ${i + 1} is an adult, and ${dog} years old`
//         : `Dog number ${i + 1} is still a puppy`;

//     console.log(output);
//   });
// };

// checkDogs(JuliaData2, KateData2);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // filter Challenge in video
// const withdrawal = movements.filter(mov => mov < 0);
// console.log(withdrawal);

// Coding Challenge #2 , #3

// const calcAverageHumanAge = dogs => {
//   const humanAgeavg = dogs
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   // const humanAgeavg = humanAge.reduce((acc, cur) => acc + cur, 0) / humanAge.length;
//   console.log(humanAgeavg);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => {
//     if (cur >= 1000) {
//       acc++;
//     }
//     return acc;
//   }, 0);

// console.log(numDeposits1000);

// // Coding Challenge #4
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1.
// dogs.forEach(dog => {
//   dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
// });

// console.log(dogs);

// // 2.
// const Sarahdog = dogs.find(
//   dog => dog.owners.filter(name => name === 'Sarah').join('') === 'Sarah'
// );

// console.log(Sarahdog);

// Sarahdog.curFood > Sarahdog.recommendedFood
//   ? console.log('eating too much')
//   : console.log('eating too little');

// // 3.
// const ownersEatTooMuch = dogs
//   .filter(dog => {
//     if (dog.curFood > dog.recommendedFood) return dog;
//   })
//   .flatMap(dog => dog.owners);

// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => {
//     if (dog.curFood < dog.recommendedFood) return dog;
//   })
//   .flatMap(dog => dog.owners);

// console.log(ownersEatTooLittle);

// // 4.
// const [owner1, owner2, owner3] = ownersEatTooMuch;
// console.log(`${owner1} and
// ${owner2} and ${owner3}'s dogs eat too much!`);
// const [owner4, owner5, owner6] = ownersEatTooLittle;
// console.log(`${owner4} and
// ${owner5} and ${owner6}'s dogs eat too little!`);

// // current > recommended * 0.9 && current < recommended * 1.1;
// // 5.
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// // 6.
// console.log(
//   dogs.some(
//     dog =>
//       dog.curFood > dog.recommendedFood * 0.9 &&
//       dog.curFood < dog.recommendedFood * 1.1
//   )
// );

// // 7.
// console.log(
//   dogs.filter(
//     dog =>
//       dog.curFood > dog.recommendedFood * 0.9 &&
//       dog.curFood < dog.recommendedFood * 1.1
//   )
// );

// // 8.
// const dogsCopy = dogs.slice();
// console.log(dogsCopy);

// console.log(dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood));

// console.log(26463498746838720937362337347n);
// n here  is BigInt

// const Person = function (firstName, birthyear) {
//   this.firstName = firstName;
//   this.birthyear = birthyear;
// };

// const usef = new Person('Usef', 2003);
// console.log(usef);

// Person.prototype.calcAge = function () {
//   console.log(2027 - this.birthyear);
// };

// Section OOP

// Coding Challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make}: Speed is ${this.speed}km/h after increaseing`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make}: Speed is ${this.speed}km/h after decreaseing`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1);
// console.log(car2);

// car1.accelerate();
// car1.brake();

// console.log('-----------------------');

// car1.accelerate();
// car1.brake();

// console.log('-----------------------');

// car2.accelerate();
// car2.brake();

// console.log('-----------------------');

// car2.accelerate();
// car2.brake();

// Coding Challenge 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make}: Speed is ${this.speed}km/h after increaseing`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make}: Speed is ${this.speed}km/h after decreaseing`);
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
//   get speedUS() {
//     return `The current speed of ${this.make} is ${this.speed / 1.6} mi/h`;
//   }
// }

// // 'Ford' going at 120 km/h

// const ford = new CarCl('Ford', 120);

// // ford.speedUS = 140;
// console.log(ford.speedUS);

// ford.accelerate();
// ford.brake();

// Coding Challenge 3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make}: Speed is ${this.speed}km/h after increaseing`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make}: Speed is ${this.speed}km/h after decreaseing`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}`
//   );
// };

// const electric = new EV('Tesla', 120, 23);
// electric.chargeBattery(90);

// console.log(electric);
// electric.brake();
// electric.accelerate();
// electric.accelerate();

// class Account {
//   // Public Fields
//   locale = navigator.language;

//   // Private Fields
//   #movements = [];
//   #pin;

//   constructor(owner, currencey, pin) {
//     this.owner = owner;
//     this.currencey = currencey;
//     this.#pin = pin;
//     // this.movements = [];
//     // this.locale = navigator.language;
//   }

//   //Public Method
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdrawe(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approvedLoan(val)) {
//     if (this._approvedLoan(val)) {
//       this.deposit(val);
//       console.log('Loan Approved');
//       return this;
//     }
//   }

//   //Private Method
//   //   #approvedLoan(val) { is act as private field not method
//   _approvedLoan(val) {
//     if (val > 0) return true;
//   }

//   //Static Version
//   // call it using class
//   static helper() {
//     console.log('Helper');
//   }
// }

// const jonas = new Account('Jonas', 'Euro', 1111);

// jonas.deposit(400);
// jonas.withdrawe(200);
// jonas.requestLoan(300);

// console.log(jonas.getMovements());
// Account.helper();

// // Chaining
// // add return this at the end to all methods make it return the object itself make u can chain

// jonas.deposit(40000).deposit(500000).withdrawe(600).requestLoan(53000);

// console.log(jonas);

// Coding Challenge 4

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make}: Speed is ${this.speed}km/h after increaseing`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make}: Speed is ${this.speed}km/h after decreaseing`);
//     return this;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
//   get speedUS() {
//     return `The current speed of ${this.make} is ${this.speed / 1.6} mi/h`;
//   }
// }

// class EVCl extends CarCl {
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);

//     this.#charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge -= 1;
//     console.log(
//       `Tesla going at ${this.speed}km/h, with a charge of ${this.#charge}`
//     );
//     return this;
//   }
// }

// const car1 = new EVCl('Rivian', 120, 23);
// console.log(car1);
// car1.brake().accelerate().chargeBattery(50).accelerate().accelerate();

// Trick
// const { length } = 'hello';
// console.log(length);
/**
 Explanation: 
	This works because JavaScript treats strings like objects, 
	and one of the properties of a string object is its length.
	When you write let {length} = 'hello';
	in JavaScript, you're asking the code to find the length of the string 'hello'
	and store that length in a variable named length.
	The word 'hello' has 5 characters, so the length becomes 5. 
 */

// Section Asynchronous JavaScript Promises, AsyncAwait, and AJAX
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const images = document.querySelector('.images');
const renderCountry = function (data, className = '') {
  const html = `
		  <article class="country ${className}">
			  <img class="country__img" src="${data.flag}" />
			  <div class="country__data">
				  <h3 class="country__name">${data.name}</h3>
				  <h4 class="country__region">${data.region}</h4>
				  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
            1
          )}M people</p>
				  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
				  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
			  </div>
		  </article> 
	`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   // We can not put data into variable because is load in the background and that is Asynchronous
//   // to get data do this
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     const html = `
// 		<article class="country">
// 			<img class="country__img" src="${data.flag}" />
// 			<div class="country__data">
// 				<h3 class="country__name">${data.name}</h3>
// 				<h4 class="country__region">${data.region}</h4>
// 				<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//           1
//         )}M people</p>
// 				<p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// 				<p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// 			</div>
// 		</article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getData('portugal');
// getData('egypt');
// getData('USA');
// getData('spain');

// const getCountryAndNeighbour = function (country) {
//   // AJAX Call Country 1
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   // We can not put data into variable because is load in the background and that is Asynchronous
//   // to get data do this
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render Country 1
//     renderCountry(data);

//     // Get Neighbour Country 2
//     const neighbour = data.borders?.[0];
//     // AJAX Call Country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const neighbourData = JSON.parse(this.responseText);
//       console.log(neighbourData);

//       // Render Country 2
//       renderCountry(neighbourData, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);

//       return response.json(); // This return new promise and must hendle it in new then
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// getCountryData('portugal');

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       // Country 2
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data, 'neighbour');

//       // country 3
//       const neighbour = data.borders?.[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };

// getCountryData('portugal');

const getJSON = function (url, errorMsg = 'country not found') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // Country 2
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       // Catch return a promise
//       console.error(`${err} 🚫`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`)
//     .then(data => {
//       renderCountry(data[0]);
//       // Country 2
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('no neighbour found');
//       return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       // Catch return a promise
//       console.error(`${err} 🚫`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', function () {
//   //   getCountryData('portugal');
//   getCountryData('australia');
//   //   getCountryData('hjgiuyr');
// });

// Coding Challenge #1

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&type=postcode&format=json&apiKey=930085ba2cec4fb3a399d1c73b6952e5`
//   )
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Can not get Country now ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       const [res] = data.results;
//       console.log(res);

//       console.log(`You are in ${res.city}, ${res.country}`);

//       return fetch(`https://restcountries.com/v2/name/${res.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => console.log(err.message));
// };
// /**
// Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// Coordinates 2: 19.037, 72.873
// Coordinates 3: -33.933, 18.474
//  */

// whereAmI(4.0383, 21.7587);

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening ');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win 💰');
//     } else {
//       reject('You Lost 💩');
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 second passed');
//   });

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function (lat, lng) {
//   getPosition()
//     .then(pos => {
//       console.log(pos);
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&type=postcode&format=json&apiKey=930085ba2cec4fb3a399d1c73b6952e5`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Can not get Country now ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       const [res] = data.results;

//       console.log(`You are in ${res.state}, ${res.country}`);

//       return fetch(`https://restcountries.com/v2/name/${res.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => console.log(err.message));
// };

// btn.addEventListener('click', whereAmI);

// Coding Challenge #2

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImg = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const newImg = document.createElement('img');
//     newImg.src = imgPath;
//     newImg.addEventListener('load', function () {
//       images.append(newImg);
//       resolve(newImg);
//     });

//     newImg.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;
// createImg('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 Loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImg('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 Loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImg('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 3 Loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const resLoc = await fetch(
//       `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&type=postcode&format=json&apiKey=930085ba2cec4fb3a399d1c73b6952e5`
//     );
//     if (!resLoc.ok)
//       throw new Error(`Can not get Country now ${response.status}`);
//     const loc = await resLoc.json();
//     const [countryData] = loc.results;

//     const res = await fetch(
//       `https://restcountries.com/v2/name/${countryData.country}`
//     );

//     if (!res.ok) throw new Error(`country not found ${response.status}`);

//     const data = await res.json();
//     const [result] = data;
//     renderCountry(result);
//     return `You are in ${countryData.state}, ${countryData.country}`;
//   } catch (err) {
//     renderError(`${err.message}`);

//     throw err;
//   }
// };
// console.log('Start');
// whereAmI()
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//   .finally(() => {
//     console.log('Finish');
//   });

// (async function () {
//   try {
//     const res = await whereAmI();
//     console.log(res);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     console.log('Finish');
//   }
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.Error(err.message);
//   }
// };

// get3Countries('portugal', 'canada', 'tanzania');

// Promise.race : means if one of all promises is settled no mater is fulfilled or rejected is win the race

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);

//   console.log(res[0]);
// })();

// const timeOut = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took long time'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/tanzania`),
//   timeOut(0.5),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// Promise.allSettled :  means return all promises is settled no mater is rejected or not
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Anthor Success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Anthor Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.any :
/*
		will retuen the first fulfilled Promise 
		and it will simply ignore rejected promises similar to race 
		with the difference that rejected promises is ignore
		*/
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Anthor Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.any([
//   getJSON(`https://restcountries.com/v2/name/italy`),
//   getJSON(`https://restcountries.com/v2/name/egypt`),
//   getJSON(`https://restcountries.com/v2/name/mexico`),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Coding Challenge #3
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImg = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const newImg = document.createElement('img');
//     newImg.src = imgPath;
//     newImg.addEventListener('load', function () {
//       images.append(newImg);
//       resolve(newImg);
//     });

//     newImg.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// // Part 1
// const loadNPause = async function () {
//   try {
//     let img = await createImg('img/img-1.jpg');
//     console.log('1');
//     await wait(2);
//     img.style.display = 'none';

//     img = await createImg('img/img-2.jpg');
//     console.log('2');
//     await wait(2);
//     img.style.display = 'none';

//     img = await createImg('img/img-3.jpg');
//     console.log('3');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (e) {
//     console.error(e.message);
//   }
// };

// // loadNPause();

// // Part 2

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async img => await createImg(img));
//     console.log(imgs);

//     const imgsPromises = await Promise.all(imgs);
//     console.log(imgsPromises);

//     imgsPromises.forEach(img => (img.className = 'parallel'));
//   } catch (e) {
//     console.error(e.message);
//   }
// };
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// Section Modern JavaScript Development Modules, Tooling, and Functional

// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// You can import everything at the same time using object
import * as ShippingCart from './shoppingCart.js';
console.log('Importing Module');
ShippingCart.addToCart('Coat', 3);
console.log(ShippingCart.totalPrice, ShippingCart.tq);

// Can import the default export using any name
import add, { cart } from './shoppingCart.js';
add('T-shirt', 5);
add('apples', 2);
add('bread', 3);

console.log(cart);

// We can mix import named export and default
// import add, { totalPrice, tq } from './shoppingCart.js';
