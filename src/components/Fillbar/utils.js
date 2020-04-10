var moment = require('moment');

export function calculateExpectedMonthProgress(target) {
  let currentDay = moment().date();
  let totalDays = moment().daysInMonth();
  return currentDay/totalDays * target;
}

export function calcProgressStyles(actual, target) {
  let expectedVal = calculateExpectedMonthProgress(target)
  let backgroundColor;
  if(actual < expectedVal)
      backgroundColor = "var(--primary-red-color)";
  else 
      backgroundColor = "var(--primary-color)";
  return {
      width: String(actual/target * 100) + "%",
      backgroundColor
  }
}

export function calcExpectedWidth(target) {
  let expected = calculateExpectedMonthProgress(target);
  return expected/target *100;
}
