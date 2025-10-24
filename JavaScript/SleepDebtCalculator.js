function getSleepHours(day) {
    switch (day) {
        case 'Monday':
            return 8;
        case 'Tuesday':
            return 7;
        case 'Wednesday':
            return 6;
        case 'Thursday':
            return 5;
        case 'Friday':
            return 8;
        case 'Saturday':
            return 9;
        case 'Sunday':
            return 8;
        default:
            return 'Invalid day';
    }
}

function getActualSleepHours() {
    return getSleepHours('Monday') +
           getSleepHours('Tuesday') +
           getSleepHours('Wednesday') +
           getSleepHours('Thursday') +
           getSleepHours('Friday') +
           getSleepHours('Saturday') +
           getSleepHours('Sunday');
}

function getIdealSleepHours() {
    const idealHoursPerNight = 8;
    return idealHoursPerNight * 7;
}

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed.');
    } else {
        const sleepDebt = idealSleepHours - actualSleepHours;
        console.log(`You need to get ${sleepDebt} more hours of sleep.`);
    }
}

calculateSleepDebt();


function reverseNumber(num) {
    for (let i = num.toString().length - 1; i >= 0; i--) {
        process.stdout.write(num.toString()[i]);
    }
    console.log();
}