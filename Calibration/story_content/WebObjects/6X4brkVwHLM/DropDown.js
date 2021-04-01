player = parent.GetPlayer();

class Slide {
    constructor(id) {
        this.id = id;
        this.slvars = {};
    }
    print() {
        console.log("id: " + this.id);
        for (let key in this.slvars) {
            console.log(key + ": " + this.slvars[key]);
        }
    }
}

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideCounter = 0;
    }

    setSLVar(key, value, index = this.slideCounter) {

        this.slides[index].slvars[key] = value;

    }

    createSlides() {

        let maxSlides = 4;//player.GetVar("maxSlides");
        let slvars = "A1 A1b A2 A2b"; //player.GetVar("slvars");

        slvars = slvars.trimLeft();
        slvars = slvars.trimRight();
        slvars = slvars.split(/\s+/);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].slvars[slvars[j]] = '';
            }
        }

    }
    stringify() {
        var cache = JSON.stringify(this);
        player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parse() {
        var cache = player.GetVar("Cache");
        //if cache is empty return without parsing
        if (cache == "") {
            console.log("Cache is empty");
            return;
        }
        var obj = JSON.parse(cache);

        if (obj.slides.length != this.slides.length) {
            //this should never be called
            console.log("slides in cache is not the same length as cards in new deck");
        }
        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].id = obj.slides[i].id;
        }
        this.slideCounter = obj.slideCounter;

        console.log("slides: ");
        this.printSlides();
        console.log("slideCounter: " + obj.slideCounter);

    }

    printSlides() {
        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].print();
        }
    }
}

//Creates a slideManager
window.initialize = function () {
    window.slideManager = new SlideManager();
    slideManager.createSlides();
}

window.loadData = function () {
    //Learner has just resumed course, load back in data
    if (typeof slideManager === 'undefined' || slideManager === null) {
        initialize();
        //   slideManager.parse();
    }
}
loadData();
//let slideManager = parent.slideManager;
//addOptions();
let selections = {};
let maxCallQuestions = 3; //not including subquestions

for(let i = 1; i <= maxCallQuestions; i++)
{
    selections["dropDown"+i] = "select";
    selections["dropDown"+i+'b'] = "select";
    let q = document.getElementById("q"+i+'b');
    q.style.display = "none";
}

let submitAnswerBtn = document.getElementById('submitBtn');

function changeSelection() {
    var eID = document.getElementById("dropDown");
    eID.options[4].selected = "true";
}

function addOptions() {
    let player = parent.GetPlayer();
    let dropDownOptions = player.GetVar("DropDownOptions")
    let options = dropDownOptions.split(' ');
    let dropDown = document.getElementById("dropDown");
    for (let i = 0; i < options.length; i++) {
        let option = document.createElement("option");
        option.text = "Kiwi";
        dropDown.add(option);
    }
    player.SetVar("test", "Hello World");

}

function showSubQuestion(qid, dropid, show = true) {
    let dropDown = document.getElementById(dropid);
    if (show) {
        let q = document.getElementById(qid);


        if (dropDown.value === "No") {
            q.style.display = "block";
        } else {
            q.style.display = "none";
        }
    }

    selections[dropid] = dropDown.value;
    setCanContinue()

}

let canContinue;


function setCanContinue() {
    canContinue = true;

    for (let i = 1; i <= maxCallQuestions; i++) {
        if (selections["dropDown" + i] === "select") {
            canContinue = false;
        }

        slideManager.setSLVar("A" + i, selections["dropDown" + i]);

        let q = document.getElementById("q" + i + 'b');

        if (q.style.display === "block") {
            if (selections["dropDown" + i + 'b'] === "select") {
                canContinue = false;
            }
            slideManager.setSLVar("A" + i + 'b', selections["dropDown" + i]);
        }

    }

    if (canContinue !== false) {
        //alert
        submitAnswerBtn.className = 'enabled';
    }
    else {
        submitAnswerBtn.className = 'disabled';
    }
    player.SetVar("canContinue", canContinue);

    slideManager.printSlides();

}


function submitAnswers() {
    if (canContinue === true) {
        //change sl varible to continue to next slide
        player.SetVar("CanContinue", true);
    }
    else {
        //change sl variable that pops up alert
        player.SetVar("Alert", true);
    }
}
