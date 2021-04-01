var slideManager = parent.slideManager;
var player = parent.player;

//let slideManager = parent.slideManager;
//addOptions();
let selections = {};
let totalCallQuestions = 4;

for (let i = 1; i <= totalCallQuestions; i++) {
    selections["dropDown" + i] = "select";
    //only q1 and q2 have subquestions
    if (i < 3) {
        selections["dropDown" + i + 'b'] = "select";
        let q = document.getElementById("q" + i + 'b');
        q.style.display = "none";
    }
}


let submitAnswerBtn = document.getElementById('submitBtn');


//make an array of dropdowns
let q1bDropDown = "mercury, Failed to appropriately respond, earth, mars, jupiter, saturn";// player.GetVar("Q2bDropDown");
let q2bDropDown = "ace, jack, king, queen, ten";// player.GetVar("Q1bDropDown");

//make an array of descriptions
let q1Description = "Call 1 Q1: Was this A-Level Customer Interaction?";// player.GetVar("Q1Description");
let q1bDescription = "Call 1 Q1B: Select the CI error.";// player.GetVar("Q1bDescription");
let q2Description = "Call 1 Q2: Was this A-level Quality?";// player.GetVar("Q2Description");
let q2bDescription = "Call 1 Q2B: Select the Quality error.";// player.GetVar("Q2bDescription");
let q3Description = "Call 1 Q3: Was this A-level Efficiency? (Not for scoring)";// player.GetVar("Q3Description");
let q4Description = "Call 1 Q4: Based on this call, is the customer likely to call back related to this request? (Not for scoring)";// player.GetVar("Q4Description");

document.getElementById("q1description").innerHTML = q1Description;
document.getElementById("q1bdescription").innerHTML = q1bDescription;
document.getElementById("q2description").innerHTML = q2Description;
document.getElementById("q2bdescription").innerHTML = q2bDescription;
document.getElementById("q3description").innerHTML = q3Description;
document.getElementById("q4description").innerHTML = q4Description;

addDropDownSelections(q1bDropDown, "dropDown1b");
addDropDownSelections(q2bDropDown, "dropDown2b");

function changeSelection() {
    var eID = document.getElementById("dropDown");
    eID.options[4].selected = "true";
}

function addDropDownSelections(dropDownSelections, dropdownid) {

    let dropDown = document.getElementById(dropdownid);
    dropDownSelections = parseString(dropDownSelections,",");
   
    let option = document.createElement("option");
    option.value = "select";
    option.text = "select";
    dropDown.add(option);
   
    for (let i = 0; i < dropDownSelections.length; i++) {
        let option = document.createElement("option");
        option.value = [dropDownSelections[i]];
        option.text = [dropDownSelections[i]];
        dropDown.add(option);
    }

}

function setSelection(dropid, subQid = '') {

    let dropDown = document.getElementById(dropid);
    if (subQid != '') {
        let q = document.getElementById(subQid);

        if (dropDown.value === "No") {
            q.style.display = "block";
        } else {
            q.style.display = "none";
        }
    }

    selections[dropid] = dropDown.value;
    setCanContinue();
}

let canContinue;


function setCanContinue() {
    canContinue = true;
    slideManager.setSlideIndex(1);
    for (let i = 1; i <= totalCallQuestions; i++) {
        if (selections["dropDown" + i] === "select") {
            canContinue = false;
        }

        slideManager.setVarsObject("q" + i, selections["dropDown" + i]);
        //replace with maxSubquestions

        let qb = document.getElementById("q" + i + 'b');
        if (qb !== null) {

            if (qb.style.display === "block") {
                if (selections["dropDown" + i + 'b'] === "select") {
                    canContinue = false;
                }
                //if there is a subquestion overwirte the stored question var with No: + sub question. i.e No: Failed to appropriately respond
                slideManager.setVarsObject("q" + i, "No: " + selections["dropDown" + i + 'b']);
            }
        }
    }

    if (canContinue !== false) {
        //alert
        submitAnswerBtn.className = 'enabled';
    }
    else {
        submitAnswerBtn.className = 'disabled';
    }
    // player.SetVar("canContinue", canContinue);
}

//correct answers needs to have all answers in order sperated by spaces
function checkCorrectAnswers(correctAnswers) {


    let answerKey = parseString(correctAnswers, ",");
    console.log(answerKey);
    let correctCount = 0;

    //this should never be executed
    if(answerKey.length != totalCallQuestions)
    {
        console.log("error: answerKey does not equal the total amount of questions.")
    }

    for (let i = 0; i < answerKey.length; i++) {


        let currentSlide = slideManager.getCurrentSlide();

        if (currentSlide.varsObject["q" + (i + 1)] === answerKey[i]) {
            correctCount++;
        }

        console.log("correctkey: " + answerKey[i]);
        console.log("your answers: " + currentSlide.varsObject["q" + (i + 1)]);
    }

    console.log("correctAnswers: " + correctCount);
    //set SetVar(correctCount)
    //set SetVar(yourAnsewers)

}



function submitAnswers() {


    if (canContinue === true) {
        //change sl varible to continue to next slide
        //  player.SetVar("CanContinue", true);
    }
    else {
        //change sl variable that pops up alert
        //  player.SetVar("Alert", true);
    }

     slideManager.printSlides();
    //Answers with No and subquestions must have perfect spacing. They all must be spelled and cased exactly
    //change to get called in SL feedbackslide
    checkCorrectAnswers("No: Failed to appropriately respond, Yes, Yes, No");
}


//MaxCallQuetions = total main and subquestions. SubQuestions = how many of the totalCallQuestions are subQuestions




