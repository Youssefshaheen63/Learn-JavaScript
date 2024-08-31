'strict mode';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// immutability principle
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Function name here not descriptive must fix it from (add) to (addExpense)
// Pure Function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const budget1 = addExpense(budget, spendingLimits, 100, 'Pizza 🍕');

const budget2 = addExpense(
  budget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const budget3 = addExpense(budget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpense = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limits' }
      : entry
  );
const finalBudget = checkExpense(budget3, spendingLimits);
console.log(finalBudget);
// Impure function because clog
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 1000);
