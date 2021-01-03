



// Now we need to define each state and its minimum wage
const federalWage = 7.25;
const stateYouLiveInElement = document.querySelector('#stateYouLiveIn');
const numWeeksWorkedElement = document.querySelector('#numWeeksWorked');
const hoursPerWeekWorkedElement = document.querySelector('#hoursPerWeek');
const answerElement = document.querySelector('#answer');
  const wages = [
    { name: 'Alabama', abbreviation: 'AL' }, 
    { name: 'Alaska', abbreviation: 'AK', wage: 9.84 }, 
    { name: 'Arizona', abbreviation: 'AZ', wage: 10.50 }, 
    { name: 'Arkansas', abbreviation: 'AR', wage: 8.5 }, 
    { name: 'California', abbreviation: 'CA', wage: 11 }, 
    { name: 'Colorado', abbreviation: 'CO', wage: 10.20 }, 
    { name: 'Connecticut', abbreviation: 'CT', wage: 10.10 }, 
    { name: 'Delaware', abbreviation: 'DE', wage: 8.25 }, 
    { name: 'District Of Columbia', abbreviation: 'DC', wage: 12.50 }, 
    { name: 'Florida', abbreviation: 'FL', wage: 8.25 }, 
    { name: 'Georgia', abbreviation: 'GA', wage: 5.15 }, 
    { name: 'Hawaii', abbreviation: 'HI', wage: 10.10 }, 
    { name: 'Idaho', abbreviation: 'ID', wage: federalWage }, 
    { name: 'Illinois', abbreviation: 'IL', wage: 8.25 }, 
    { name: 'Indiana', abbreviation: 'IN', wage: federalWage }, 
    { name: 'Iowa', abbreviation: 'IA', wage: federalWage }, 
    { name: 'Kansas', abbreviation: 'KS', wage: federalWage }, 
    { name: 'Kentucky', abbreviation: 'KY', wage: federalWage }, 
    { name: 'Louisiana', abbreviation: 'LA' }, 
    { name: 'Maine', abbreviation: 'ME', wage: 10 }, 
    { name: 'Maryland', abbreviation: 'MD', wage: 9.25 }, 
    { name: 'Massachusetts', abbreviation: 'MA', wage: 11 }, 
    { name: 'Michigan', abbreviation: 'MI', wage: 9.25  }, 
    { name: 'Minnesota', abbreviation: 'MN', wage: 9.65 }, 
    { name: 'Mississippi', abbreviation: 'MS' }, 
    { name: 'Missouri', abbreviation: 'MO', wage: 7.85 }, 
    { name: 'Montana', abbreviation: 'MT', wage: 8.30 }, 
    { name: 'Nebraska', abbreviation: 'NE', wage: 9 }, 
    { name: 'Nevada', abbreviation: 'NV', wage: 8.25 }, 
    { name: 'New Hampshire', abbreviation: 'NH', wage: federalWage }, 
    { name: 'New Jersey', abbreviation: 'NJ', wage: 8.60 }, 
    { name: 'New Mexico', abbreviation: 'NM', wage: 7.5 }, 
    { name: 'New York', abbreviation: 'NY', wage: 10.40 }, 
    { name: 'North Carolina', abbreviation: 'NC', wage: federalWage }, 
    { name: 'North Dakota', abbreviation: 'ND', wage: federalWage }, 
    { name: 'Ohio', abbreviation: 'OH', wage: 8.30 }, 
    { name: 'Oklahoma', abbreviation: 'OK', wage: federalWage }, 
    { name: 'Oregon', abbreviation: 'OR', wage: 10.25 }, 
    { name: 'Pennsylvania', abbreviation: 'PA', wage: federalWage }, 
    { name: 'Rhode Island', abbreviation: 'RI', wage: 10.10 }, 
    { name: 'South Carolina', abbreviation: 'SC' }, 
    { name: 'South Dakota', abbreviation: 'SD', wage: 8.85 }, 
    { name: 'Tennessee', abbreviation: 'TN' }, 
    { name: 'Texas', abbreviation: 'TX', wage: federalWage }, 
    { name: 'Utah', abbreviation: 'UT', wage: federalWage }, 
    { name: 'Vermont', abbreviation: 'VT', wage: 10.50 }, 
    { name: 'Virgin Islands', abbreviation: 'VI', wage: federalWage }, 
    { name: 'Virginia', abbreviation: 'VA', wage: federalWage }, 
    { name: 'Washington', abbreviation: 'WA', wage: 11.50 }, 
    { name: 'West Virginia', abbreviation: 'WV', wage: 8.75 }, 
    { name: 'Wisconsin', abbreviation: 'WI', wage: federalWage }, 
    { name: 'Wyoming', abbreviation: 'WY', wage: 5.15 },
  ];


  // Add option element for each state 

  // Loop through every state
wages.forEach((stateWageObject) => {
  
  // - Create an option tag for each state
  
  const optionElement = document.createElement('option');
  
  // - Set property/values on option element

  optionElement.innerText = stateWageObject.name;
  optionElement.value = stateWageObject.abbreviation;

  // - append that within our <select></select>
  const stateYouLiveIn = document.querySelector('#stateYouLiveIn');
  stateYouLiveIn.appendChild(optionElement);
});

// All this happens upon button click
const onButtonClick = () => {
  let isValid = true
  // Need variable for num of weeks per year worked
  const numWeeksWorked = Number(numWeeksWorkedElement.value);
  console.log(typeof numWeeksWorked);
  const numWeeksWorkedError = document.querySelector('#numWeeksWorkedError');
  if (numWeeksWorked > 52 || numWeeksWorked < 1) {
    numWeeksWorkedError.innerText = 'ERROR: Enter a number between 1 and 52'
    isValid = false;
  } else {
    numWeeksWorkedError.innerText = '';
  }

  // I need the variable for how many hours per week worked
  const hoursPerWeekWorked = Number(hoursPerWeekWorkedElement.value);
  console.log(typeof hoursPerWeekWorked, hoursPerWeekWorked);
  const hoursPerWeekWorkedError = document.querySelector('#hoursPerWeekError');
  if (hoursPerWeekWorked > 168 || hoursPerWeekWorked < 1) {
    hoursPerWeekWorkedError.innerText = 'ERROR: Enter a number between 1 and 168'
    isValid = false;
  } else {
    hoursPerWeekWorkedError.innerText = '';
  }

  // Need variable for which state you live in
  const stateYouLiveIn = stateYouLiveInElement.value;
  console.log(typeof stateYouLiveIn, stateYouLiveIn);
  const stateYouLiveInError = document.querySelector('#stateYouLiveInError');
  if (stateYouLiveIn === '') {
    stateYouLiveInError.innerText = 'ERROR: Please select your state from the drop down menu'
    isValid = false;
  } else {
    stateYouLiveInError.innerText = '';
  }

  // When we know the state, how do we get the wage value for that state?
  const minimumWageStateObject = wages.find((minimumWageObject) => {
    return stateYouLiveIn === minimumWageObject.abbreviation;
  });
  console.log(minimumWageStateObject);

  // What is the result? numOfWeeksWorked * hoursPerWeekWorked * minimumWage
  let minimumWage;
  // minimumWageStateObject.wage;
  if (minimumWageStateObject !== undefined) {
    minimumWage = minimumWageStateObject.wage;
    if (minimumWage === undefined) {
      minimumWage = federalWage;
    }
  
  };
  
 // how to Format the answer to include the numbers as us dollars???
 

  // display the result on screen in dollars 
  if (isValid === true) {
    answerElement.innerText = "$" + numWeeksWorked * hoursPerWeekWorked * minimumWage;
  } else {
    answerElement.innerText = 'ERROR: Please fix all errors above';
  }
};
   
// what happens when they click the button in each case

const htmlElement= document.querySelector('button');
htmlElement.addEventListener('click', onButtonClick);
console.log(htmlElement);

// Disable button until all inputs are filled
const buttonElement = document.querySelector('#button');

  // set disabled state to true
const BUTTON_TEXT_ENABLED = "Find out your minimum wage salary";
const BUTTON_TEXT_DISABLED = "Enter info above and select your state";
buttonElement.disabled = true;
buttonElement.innerText = BUTTON_TEXT_DISABLED;


  // set event listener for inputs to know when there are key presses and when the drop down menu has been set
  // 
function inputsHaveValues() {
  // if inputsHaveValues === false button is disabled

  if (numWeeksWorkedElement.value === '' 
    || hoursPerWeekWorkedElement.value === '' 
    || stateYouLiveInElement.value === ''
    ) {
    buttonElement.disabled = true;
    buttonElement.innerText = BUTTON_TEXT_DISABLED;
  } else {
    buttonElement.disabled = false;
    buttonElement.innerText = BUTTON_TEXT_ENABLED;
  }
};

numWeeksWorkedElement.addEventListener('change', inputsHaveValues);
hoursPerWeekWorkedElement.addEventListener('change', inputsHaveValues);
stateYouLiveInElement.addEventListener('change', inputsHaveValues);

// Make inputs red so you can see where to input info

// Make the answer have a dollar sign before it.
