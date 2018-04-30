const getDestructuredElementsByIds = (document) => { // Helper function
  return new Proxy({}, { get: (_, id) => document.getElementById(id) });
};
const { boxGreen, boxBlue, boxOrange } = getDestructuredElementsByIds(document);

const boxes = [boxGreen, boxBlue, boxOrange];
_.forEach(boxes, (box) => {
  box.style.backgroundColor = 'dodgerblue';
});

for (const currentBoxItem of boxes) {
  if (_.includes(currentBoxItem.className, 'box blue')) continue;
  currentBoxItem.textContent = 'I changed to blue';
}

const ages = [12, 17, 8, 21, 14, 11];
const findAgeIndex = _.findIndex(ages, currentAge => currentAge >= 18);
const findAge = _.find(ages, currentAge => currentAge >= 18);
console.log(`${findAgeIndex + 1}: ${findAge}`);
