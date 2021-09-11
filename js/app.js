console.log("Bad Ass Mofo!");

const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');


let words = {
    "Data": "collection of facts",
    "Data analysis": "the collection, transformation, and organization of data in order to draw conclusions, make predictions, and drive informed decision-making",
    "Data analyst": "someone who collects, transforms, and organizes data in order to help make informed decisions",
    "People analytics": "the practice of collecting and analyzing data on the people who make up a company’s workforce in order to gain insights to improve how the company operates",
    "Ecosystem": "a group of elements that interact with one another",
    "Data ecosytem": "elements that interact with one another in order to produce, manage, store, organize, analyze, and share data",
    "Data analytics": "the science of data. It's a very broad concept that encompasses everything from the job of managing and using data to the tools and methods that data workers use each and every day",
    "Data analyst": "Who find answers to existing questions by creating insights from data sources?",
    "Data scientist": "Who creates new questions using data?",
    "Data Science": "creating new ways of modeling and understanding the unknown by using raw data",
    "Data analysis life cycle": "the process of going from data to decision. Data goes through several phases as it gets created, consumed, tested, processed, and reused"
} 

data = Object.entries(words)
// console.log(data[0][1]);

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[1]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    // console.log(randomTerm);
};

function removeElement() {
    // definition.remove();
    definition.style.display = 'none';
}

checkButton.addEventListener('click', function(){
    // console.log("You clicked the 'Flip' button");
    
    // setTimeout (function(){
    //     definition.style.display = 'block'
    // }, 3000);
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function(){
    // setTimeout(function (){
    //     getRandomWord()
    // },3000)
    removeElement();
    getRandomWord();
    // console.log("You clicked the 'Next' Button");
});

