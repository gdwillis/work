function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Zc9FLaAJgH":
        Script1();
        break;
      case "6cv5hpcytru":
        Script2();
        break;
      case "6RhZxEAPJXu":
        Script3();
        break;
      case "6qnvP7WdcTd":
        Script4();
        break;
      case "6Z87FmLwKaP":
        Script5();
        break;
      case "6b4GtwJFOAp":
        Script6();
        break;
      case "6miw5Oe1OIu":
        Script7();
        break;
      case "6GZQ9WCP03o":
        Script8();
        break;
      case "5bI3ElVnSfb":
        Script9();
        break;
      case "6Rw0yf9DZCz":
        Script10();
        break;
      case "6A0t9bBknki":
        Script11();
        break;
      case "5sWn9YJNhkh":
        Script12();
        break;
      case "6Xj8cim5Whd":
        Script13();
        break;
      case "5uM5QzAVmLM":
        Script14();
        break;
      case "6BDFMVu0z4Y":
        Script15();
        break;
  }
}

function Script1()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script2()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script3()
{
  var player = GetPlayer();
slideManager.setSlideIndex(player.GetVar("SlideIndex"));

}

function Script4()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script5()
{
  var player = GetPlayer();

slideManager.checkCorrectAnswers(player.GetVar("AnswerKey"));
}

function Script6()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script7()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script8()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script9()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script10()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script11()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script12()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script13()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script14()
{
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

class SlideManager {
    constructor(id) {
        this.slides = [];
        this.slideIndex = 0;
        this.player = GetPlayer();
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

        this.player.SetVar(key, value);
    }

    getSLVar(key) {
        return this.player.GetVar(key);
    }
    

    setSlideIndex(index) {
        this.slideIndex = index - 1;
    }
    message()
    {
        console.log("hi there");
        alert("i am a slide manager");
    }

    //takes a long text string and returns an array of strings with spaces removed. Pass a delimiter if you want it to seperate by a character other than spaces
    parseString(s, delimiter = "") {
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

    createSlides() {

        let maxSlides = this.player.GetVar("MaxSlides");
        let slvars = this.player.GetVar("slideVars");

        slvars = this.parseString(slvars);

        for (let i = 0; i < maxSlides; i++) {
            this.slides[i] = new Slide(i + 1);
            for (let j = 0; j < slvars.length; j++) {
                this.slides[i].varsObject[slvars[j]] = '';
            }
        }

    }
    stringifyToCache() {
        var cache = JSON.stringify(this);
        this.player.SetVar("Cache", cache);
    }

    //loads data from cache SL variable
    parseCache() {
        var cache = this.player.GetVar("Cache");
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
        //   slideManager.parseCache();
    }
}

loadData();


}

function Script15()
{
  
var player = GetPlayer();

var a1 = player.GetVar("Q1Answer_1");
var a1b = player.GetVar("Q1Answer_1b");
var a2 = player.GetVar("Q1Answer_2");
var a2b = player.GetVar("Q1Answer_2b");//wrong
var a3 = player.GetVar("Q1Answer_3");
var a3b = player.GetVar("Q1Answer_3b");
var results = (a1+a1b+a2)/3 * 100;
var finalRawScore = (a1+a1b+a2);
player.SetVar("results", results);


function findLMSAPI(win) {
 if (win.hasOwnProperty("GetStudentID")) return win;
 else if (win.parent == win) return null;
 else return findLMSAPI(win.parent);
}


/*set score; */




      //score scale
      SCORM2004_objAPI.SetValue('cmi.score.scaled', results);

      SCORM2004_objAPI.SetValue('cmi.score.raw', finalRawScore);
      SCORM2004_objAPI.SetValue('cmi.score.min', '0');
      SCORM2004_objAPI.SetValue('cmi.score.max', '100');

var a = [a1,a1b,a2,a2b,a3,a3b];
for (i=0; i <6; i++)
{
var b = '';
if(i == 1 || i ==3 || i ==5)
{
b = 'b'; 
}
       SCORM2004_objAPI.SetValue('cmi.interactions.'+i+'.id', i);
       SCORM2004_objAPI.SetValue('cmi.interactions.'+i+'.description', "answer"+i+b);
       SCORM2004_objAPI.SetValue('cmi.interactions.'+i+'.objectives.'+i+'.id', i);
       SCORM2004_objAPI.SetValue('cmi.interactions.'+i+'.type', 'fill-in');
       //SCORM2004_objAPI.SetValue('cmi.interactions.'+i+'.timestamp', "0:0:0");
       SCORM2004_objAPI.SetValue('cmi.interactions.'+i+'.learner_response', "A Response Goes Here");
       SCORM2004_objAPI.SetValue('cmi.interactions.'+i+'.result', a[i]);

}

/*set status; possible values: "completed","incomplete", "failed", "passed"*/

if (results >= 0)
{
  
          SCORM2004_objAPI.SetValue("cmi.success_status","passed");
          SCORM2004_objAPI.SetValue("cmi.completion_status","completed");   
}
else
{
          SCORM2004_objAPI.SetValue("cmi.success_status","failed");
          SCORM2004_objAPI.SetValue("cmi.completion_status","incomplete");  
}

alert("end");
}

