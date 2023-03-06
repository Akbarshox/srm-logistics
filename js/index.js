import Translator from "./translator.js";

var translator = new Translator({
  persist: false,
  languages: ["en", "ru"],
  defaultLanguage: "en",
  detectLanguage: true,
  filesLocation: "/i18n"
});

if(localStorage.getItem("currentLang")){
  translator.load(localStorage.getItem("currentLang"));
    if(localStorage.getItem("currentLang") === "ru"){
      document.getElementById("changeLangTxt").textContent = "EN";
    }
} else {
  translator.load("en");
  console.log("No language found");
}

var langvalue = document.getElementById("changeLangTxt").textContent.toLowerCase();

document.getElementById("changeLangTxt").addEventListener("click", (event) => {
  localStorage.setItem("currentLang", langvalue);
  console.log(langvalue);
  translator.load(langvalue);
})

