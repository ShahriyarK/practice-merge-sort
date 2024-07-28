const [merge, mergeSort] = require("./merge-sort");

const populateData = (arr, n) => {
    let subArray = [];
    for (let i = 0; i < n; i++) {
        let randomValue = Math.floor(Math.random() * n);
        subArray.push(randomValue)
    }
    arr.push(subArray)
}

let seedData = [];

populateData(seedData, 10000)
populateData(seedData, 20000)
populateData(seedData, 30000)
populateData(seedData, 40000)
populateData(seedData, 50000)
populateData(seedData, 60000)
populateData(seedData, 70000)
populateData(seedData, 80000)
populateData(seedData, 90000)
populateData(seedData, 100000)
populateData(seedData, 200000)


const measurePerformance = (data) => {
    for (let i = 0; i < data.length; i++) {
        const startTime = Date.now();
        // selectionSort(data[i])
        mergeSort(data[i])
        const endTime = Date.now()
        console.log(endTime - startTime)
    }
}

measurePerformance(seedData)

    // From the performance benchmark, the curve indicates that there is not an exponential increase
    // in time with input size. Infact if we compare the values for time with selection, insertion or bubble
    // sort, merge sort is so much faster in comparison. For n = 100000, selection sort took 10,577 ms while
    // merge-sort took 42 ms. SO merge sort was ~252 times faster for n = 100000
