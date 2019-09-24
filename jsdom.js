// Sample Code for #part0
let zero = document.querySelector("#part00");
let hello = document.createTextNode("Hello world!");
zero.appendChild(hello);
/*--- begin answer part00 ---*/
const myname = 'David Calvin Baas';
/*--- end answer part00 ---*/
if (typeof myname !== "undefined") {
  let textBefore = document.createTextNode("My name is ");
  zero.appendChild(textBefore);
  let boldNode = document.createElement("b");
  let name = document.createTextNode(myname);
  zero.appendChild(boldNode);
  boldNode.appendChild(name);
  let textAfter = document.createTextNode(". This work is solely mine! ");
  zero.appendChild(textAfter);

  zero.appendChild(
    document.createTextNode(
      "I understand that " +
        "copying someone else's code and claiming to be my own work " +
        "or sharing my code with someone else is a "
    )
  );
  let honesty = document.createElement("b");
  honesty.appendChild(document.createTextNode("violation"));
  zero.appendChild(honesty);
  zero.appendChild(document.createTextNode(" of academic honesty."));
}

// Code for part 1
let atoms = [
  "Aluminum",
  "Barium",
  "Carbon",
  "Dubnium",
  "Erbium",
  "Fluor",
  "Gallium",
  "Hydrogen",
  "Helium",
  "Iron",
  "Krypton",
  "Lithium",
  "Magnesium",
  "Nitrogen",
  "Oxygen",
  "Palladium",
  "Radon",
  "Silicon",
  "Titanium",
  "Uranium",
  "Vanadium",
  "Xenon",
  "Zinc"
];

let N = atoms.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atoms[pos1];
  atoms[pos1] = atoms[pos2];
  atoms[pos2] = tmp;
}

/*--- begin answer part01 ---*/
let partOneNode = document.getElementById('part01');
let atomList = document.createElement('ol');
atoms.forEach((atomStr) =>{
  listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(atomStr));
  atomList.appendChild(listItem);
});
partOneNode.appendChild(atomList);
/*--- end answer part01 ---*/

// Code for part 2
// Don't rename the following two variables!
/*--- begin answer part02 ---*/
const myDomesticTravel = {
  destination: 'Seattle, Washington',
  dateOfVisit: 'July 20-25 yearly',
  isAbroad: false,
  paragraph: document.createElement('p'),
  imageSrc: './res/Seattle WA.jpg',
  photoURL: document.createElement('img')
};
const myInternationalTravel = {
  destination: 'Cozumel, Mexico',
  dateOfVisit: 'July 24, 2018',
  isAbroad: true,
  paragraph: document.createElement('p'),
  imageSrc: './res/Cozumel Mexico.jpg',
  photoURL: document.createElement('img')
};

const DOMESTIC_STR = `My family goes to ${myDomesticTravel.destination}  from  ${myDomesticTravel.dateOfVisit}.`;
myDomesticTravel.paragraph.append (document.createTextNode(DOMESTIC_STR));
myDomesticTravel.paragraph.classList.add('domestic');
myDomesticTravel.photoURL.setAttribute('src', myDomesticTravel.imageSrc);
myDomesticTravel.photoURL.setAttribute('width', '150px');
myDomesticTravel.photoURL.setAttribute('height', '150px');

const INTERNATIONAL_STR = `Last year, my exended family went on a cruise. On that curise we
went to ${myInternationalTravel.destination} on ${myInternationalTravel.dateOfVisit}.`;
myInternationalTravel.paragraph.appendChild(document.createTextNode(INTERNATIONAL_STR));
myInternationalTravel.paragraph.classList.add('international');
myInternationalTravel.photoURL.setAttribute('src', myInternationalTravel.imageSrc);
myInternationalTravel.photoURL.setAttribute('width', '150px');
myInternationalTravel.photoURL.setAttribute('height', '150px');

// Add the elements.
let partTwoNode = document.getElementById('part02');
partTwoNode.appendChild(myDomesticTravel.paragraph);
partTwoNode.appendChild(myDomesticTravel.photoURL)

partTwoNode.appendChild(myInternationalTravel.paragraph);
partTwoNode.appendChild(myInternationalTravel.photoURL);
/*--- end answer part02 ---*/

// Code for part 3
let atomObjects = [
  { name: "Aluminum", weight: 26.982 },
  { name: "Barium", weight: 137.33 },
  { name: "Carbon", weight: 12.011 },
  { name: "Dubnium", weight: 268 },
  { name: "Erbium", weight: 167.26 },
  { name: "Fluor", weight: 18.988 },
  { name: "Gallium", weight: 69.723 },
  { name: "Hydrogen", weight: 1.008 },
  { name: "Helium", weight: 4.0026 },
  { name: "Iron", weight: 55.845 },
  { name: "Krypton", weight: 83.798 },
  { name: "Lithium", weight: 6.94 },
  { name: "Magnesium", weight: 24.305 },
  { name: "Nitrogen", weight: 14.007 },
  { name: "Oxygen", weight: 15.999 },
  { name: "Palladium", weight: 106.42 },
  { name: "Radon", weight: 222 },
  { name: "Silicon", weight: 28.085 },
  { name: "Titanium", weight: 47.867 },
  { name: "Uranium", weight: 238.03 },
  { name: "Vanadium", weight: 50.942 },
  { name: "Xenon", weight: 131.29 },
  { name: "Zinc", weight: 65.38 }
];
N = atomObjects.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atomObjects[pos1];
  atomObjects[pos1] = atomObjects[pos2];
  atomObjects[pos2] = tmp;
}

/*--- begin answer part03 ---*/
const HEAVY_STR = 'heavy';
const LIGHT_STR = 'light';
let detailedAtomList = document.createElement('ol')
atomObjects.forEach(x => {
  listItem = document.createElement('li');
  if(x.weight > 150){
    listItem.classList.add(HEAVY_STR);
  }
  else {
    listItem.classList.add(LIGHT_STR);
  }
  const ATOM_STR = `${x.name} (weight: ${parseFloat(x.weight).toFixed(1)})`;
  listItem.appendChild(document.createTextNode(ATOM_STR));
  detailedAtomList.appendChild(listItem);
});
partThreeObject = document.getElementById('part03');
partThreeObject.appendChild(detailedAtomList);
/*--- end answer part03 ---*/

// Code for part 4
/*--- begin answer part04 ---*/
const tableHeaders = ['Atom', 'Weight'];
let atomTable = document.createElement('table');
atomTable.classList.add('atomTable');
let atomTableHeader = document.createElement('tr');  
tableHeaders.forEach((element) => {
  tdEntry = document.createElement('th');
  tdEntry.appendChild(document.createTextNode(element));
  atomTableHeader.appendChild(tdEntry);
})
atomTable.appendChild(atomTableHeader);

atomObjects.forEach((element) => {
  let tableRow = document.createElement('tr');
  let atomColumn = document.createElement('td');
  let weightColumn = document.createElement('td');

  atomColumn.appendChild(document.createTextNode(element.name))
  weightColumn.appendChild(document.createTextNode(element.weight));
  tableRow.appendChild(atomColumn);
  tableRow.appendChild(weightColumn);
  if(element.weight > 150){
    tableRow.classList.add(HEAVY_STR);
  }
  else {
    tableRow.classList.add(LIGHT_STR);
  }
  atomTable.appendChild(tableRow);
});
let partFourNode = document.getElementById('part04');
partFourNode.appendChild(atomTable);
/*--- end answer part04 ---*/


// Code for part 5 (Extra credit)
/*--- begin answer part05 ---*/
// I didn't have time to do this extra credit. :(
/*--- end answer part05 ---*/
