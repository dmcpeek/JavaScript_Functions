//console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
printOdds(99);

function printOdds(count) {
    for(let i = 0; i < count; i++) {
        if (i % 2 === 0) {
            continue;
        }
        else {
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
checkAge("Bubba", 3);

function checkAge(userName, age){
    let aboveSixteen = ("Congrats " + userName + ", you can drive!");
    let belowSixteen = ("Sorry " + userName + ", but you need to wait until you're 16.");

    if (age < 16) {
        console.log (belowSixteen);
    }
    else{
        console.log (aboveSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
whereOnTheGridIsThePoint(2, -1); //Where's Waldo

function whereOnTheGridIsThePoint(x, y){
    if ( x == 0 && y == 0) {
        console.log("The point is exactly in the center on the x and y axis.");
    } else if (x = 0) {
      console.log("The point is on the x axis.")
    } else if (y = 0) {
      console.log("The point is on the y axis.")
    } else if (x > 0 && y > 0) {
      console.log("The point is in the first quadrant.")
    } else if (x < 0 && y > 0){
      console.log("The point is in the second quadrant.")
    } else if (x < 0 && y < 0) {
      console.log("The point is in the third quadrant.")
    }
    else {
        console.log("The point is in the fourth quadrant.")
    }
}


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
trianglesOnMyMind(7, 8, 9)

function trianglesOnMyMind(side1, side2, side3) {
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        if (side1 == side2 && side2 == side3){
            console.log("The triagle is an equilateral triagle")
        }
        else if (side1 == side2 || side1 == side3 || side2 == side3)
            console.log("The triagle is an isosceles triagle")
        else {
            console.log("The triangle is a scalene triangle");       }
    } else {
        console.log("Invalid triangle");
      }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
dataPlan(10, 30, 1);

function dataPlan(planLimit, day, usage) {
    let daysLeftOnPlan = 30 - day;
    let averageDailyUse = usage / day;
    let suggestedAverageUse = planLimit / 30;
    let howMuchDataLeft = planLimit - usage;
    let projectedUsage = Math.abs(planLimit - (averageDailyUse * 30));
    let suggestedUsage = howMuchDataLeft / daysLeftOnPlan;          

    if (averageDailyUse > suggestedAverageUse) {
        console.log(`${day} days used(s), ${daysLeftOnPlan} day(s) remaining.`);
        console.log(`What you are using: ${averageDailyUse.toFixed(2)} GB/day.`);
        console.log(`You are EXCEEDING your average daily use.`);
        console.log(`What you should use: ${suggestedAverageUse.toFixed(2)} GB/day.`);
        console.log(`Continuing this high usage, you'll exceed your data plan by ${projectedUsage.toFixed(0)} GB.`);
        console.log(`To stay below your data plan, use no more than ${suggestedUsage.toFixed(0)} GB/day, or get a better plan.`);
    }
    else if (averageDailyUse < suggestedAverageUse) {
        console.log(`${day} days used, ${daysLeftOnPlan} days remaining.`);
        console.log(`Average daily use: ${averageDailyUse.toFixed(2)}`);
        console.log(`You are UNDER your average daily use ${averageDailyUse.toFixed(2)} GB/day.`);
        console.log(`Continuing this usage, you'll be under you plan by ${projectedUsage} GB.`);
    }
    else {
        console.log('Your average daily use is ${averageDailyUse.toFixed(2)} GB/day. You are on target with your usage.');
    }
}