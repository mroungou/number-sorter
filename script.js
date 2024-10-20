const sortButton = document.getElementById('sort');

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [...document.getElementsByClassName('values-dropdown')].map(dropdown => Number(dropdown.value))
    const sortedValues = bubbleSort(inputValues)
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
    
}

sortButton.addEventListener('click', sortInputArray)
