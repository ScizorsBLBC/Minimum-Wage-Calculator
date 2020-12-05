// Now we need to define each state and its minimum wage
const federalWage = 7.25;
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

// max number 52?

// Need to enter responses for error messages "You must enter all fields" "Please use a number lower than 52"

// All this happens upon button click
const onButtonClick = () => {
    console.log('did it work');
    // Need variable for num of weeks per year worked

    // I need the variable for how many hours per year worked

    // Need variable for which state you live in

    // When we know the state, how do we get the wage value for that state?

    // What is the result? numOfWeeksWorked * hoursPerWeekWorked * minimumWage

    // display the result on screen

};
   
// what happens when they click the button in each case

const htmlElement= document.querySelector('button');
htmlElement.addEventListener('click', onButtonClick);
console.log(htmlElement);