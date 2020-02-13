function Gallery({
  container,
  item
}) {

  let buffer = [
      []
    ],
    array = [],
    allSum = 0,
    mean,
    optimalHeight;

  const flexParent = document.querySelector(container),
    // itemsClassName = flexParent.querySelector(item).className,
    items = flexParent.querySelectorAll(item);

  // this.columns = columns;
  // let innerWidth;

  function resetHeight() {
    for (item of items) {
      item.style.height = '';
    }
  }

  function setItemsRect(columns, innerWidth) {
    //Reset heights before changing number of columns
    resetHeight();

    for (let item of items) {

      let itemStyles = getComputedStyle(item),
        verticalMargins = parseFloat(itemStyles.marginTop) + parseFloat(itemStyles.marginBottom),
        itemHeight = item.offsetHeight,
        height = (itemHeight + verticalMargins);

      allSum += height;
      array.push(height);

      item.style.height = `${itemHeight}px`;
    }
  }

  function getMean(columns) {
    mean = allSum / columns;
  }

  function getLastArray() {
    return buffer[buffer.length - 1];
  }

  function addNewArray() {
    let lastArr = getLastArray(),
      copy = lastArr.slice();

    buffer.push(copy);
  }

  function saveEntries(sum, colIndex) {
    let lastArr = getLastArray(),
      entry = {
        'sum': sum,
        'colIndex': colIndex
      };

    let i = lastArr.findIndex(item => {
      return item.colIndex == colIndex;
    });

    if (~i) {
      lastArr[i] = entry;
      return;
    }

    lastArr.push(entry);
  }

  function findEntries(colIndex, index = 0) {
    let sum = 0;

    while (index < array.length) {
      sum += array[index];
      index++;

      if (sum > mean && colIndex > 1) {
        colIndex--;


        saveEntries(sum, colIndex);
        findEntries(colIndex, index);

        index--;
        sum -= array[index];

        saveEntries(sum, colIndex);
        findEntries(colIndex, index);

        if (sum == mean) {
          index--;
          sum -= array[index];

          saveEntries(sum, colIndex);
          findEntries(colIndex, index);
        }

        return;
      }

      if (index == array.length) {
        colIndex--;

        saveEntries(sum, colIndex);
        addNewArray();

        return;
      }
    }
  }

  function findOptimal() {

    let prop = [];

    buffer.forEach(item => {
      let max = item.reduce((a, b) => {
        return a.sum > b.sum ? a : b;
      });

      prop.push(max.sum);
    })

    optimalHeight = Math.min(...prop);
  }

  this.init = function(columns) {
    const innerWidth = window.innerWidth;

    setItemsRect(columns, innerWidth);
    getMean(columns);
    findEntries(columns);
    findOptimal();

    flexParent.style.height = `${optimalHeight}px`;

    //Reset all stuff so as to call init again in case resizing window or adding new flex-item
    buffer = [
        []
      ],
      array = [],
      allSum = 0,
      mean = 0,
      optimalHeight = 0;
  }
}

export { Gallery as default };