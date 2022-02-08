// Code your solution in this file!
const returnFirstTwoDrivers = function (a) {
    return a.slice(0,2);
}

const returnLastTwoDrivers = function (a) {
    return a.slice(a.length - 2,a.length);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(n) {
    return function (fare) {
        return fare*n;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(a,func) {
    return func(a);
    
}
