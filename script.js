const sortButton = document.getElementById('sort');

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [...document.getElementsByClassName('values-dropdown')].map(dropdown => Number(dropdown.value))
    // const sortedValues = bubbleSort(inputValues)
    // const sortedValues = selectionSort(inputValues)
    const sortedValues = inputValues.sort((a, b) => {
        return a - b
    })
    updateUI(sortedValues)
}

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    })
}


const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // console.log(array, array[j], array[j+1])
            if (array[j] > array[j + 1]) {
                // temp holds the larger value
                const temp = array[j]
                // the current value is then replaced by the smaller value which is j + 1
                array[j] = array[j + 1];
                // the larger value is then "bubbled" to the towards the end -> the value of temp holds the larger value
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

const selectionSort = (array) => {

    for (let i = 0; i < array.length; i++) {
        // minIndex tracks the index of the smallest value
        // if the smallest value is at the index it swaps it with itself and doesn't move
        let minIndex = i

        for (let j = i + 1; j < array.length; j++) {
            // console.log(array, array[j], array[minIndex])
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        const temp = array[i] /* stores the value of the current value @ i */
        array[i] = array[minIndex] /* swapping the value at i with the smallest one */
        array[minIndex] = temp /* swapping the value that was at the index where the smaller value 
        was found with the value of the larger value that was found at i*/
    }

    return array
}

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i]
        // j is the index to left of i i.e. before i [0,1,2,3] i would be 1 and j would be 0
        let j = i - 1

       while (j >= 0 && array[j] > currValue) {
        /* on each iteration of this while loop we're finding an element that is larger
        than currValue. i want to move that element to right to make room for currValue
        therefore, i am assigning the value at the next index to be the value currently 
        at array[j] */

        /* j + 1 is just i???? */
        /* if the  */
        array[j + 1] = array[j]
        j--
       }
       /* because currentValue > array[j] i want to move currentValue to the right */
       array[j + 1] = currValue
    }
    return array;
}

sortButton.addEventListener('click', sortInputArray)
