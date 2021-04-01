window.player = parent.GetPlayer();

class Slide {
    constructor(id) {
        this.id = id;
        this.varsObject = {}; //change name to varsObject
    }
    print() {
        console.log("id: " + this.id);
        for (let key in this.varsObject) {
            console.log(key + ": " + this.varsObject[key]);
        }
    }
}

//takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
function parseString(s, delimiter = "") {
    s = s.trimLeft();
    s = s.trimRight();
    if (delimiter === "") {
        s = s.split(/\s+/);
    }
    else {
        s = s.split(delimiter);
        for (let i = 0; i < s.length; i++) {
            s[i] = s[i].trimLeft();
            s[i] = s[i].trimRight();
        }
    }
    return s;
}

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
    }

    setVarsObject(key, value) {

        this.slides[this.slideIndex].varsObject[key] = value;
    }

    getVarsObject(key) {

        return this.slides[this.slideIndex].varsObject[key];
    }

    getCurrentSlide() {
        return this.slides[this.slideIndex];
    }

    setSLVar(key, value) {

        player.SetVar(key, value);
    }

    getSLVar(key) {
        return player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    alert()
    {
        alert("i am a slide manager");
    }

    createSlides() {

        let maxSlides = 4;//player.GetVar("MaxSlides");
        let slvars = "test"; //player.GetVar("slvars");

        slvars = parseString(slvars);

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
        this.slideIndex = obj.slideIndex;

        console.log("slides: ");
        this.printSlides();
        console.log("slideIndex: " + obj.slideIndex);

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

