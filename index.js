const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(findSum, 0);

function findSum(count, batch) {
    return count + batch;
}