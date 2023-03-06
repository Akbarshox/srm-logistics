import Translator from "./translator.js";

var translator = new Translator({
   persist: false,
   languages: ["en", "de"],
   defaultLanguage: "en",
   detectLanguage: true,
   filesLocation: "/i18n"
});

if (localStorage.getItem("currentLang")) {
   translator.load(localStorage.getItem("currentLang"));
   if (localStorage.getItem("currentLang") === "de") {
      translator.load("de");
   }
} else {
   translator.load("en");
   console.log("No language found");
}

document.querySelector("select").addEventListener("change", function (evt) {
   localStorage.setItem("currentLang", evt.target.value);
   console.log(evt.target.value)
   translator.load(evt.target.value);
   /*
   if (evt.target.tagName === "INPUT") {
     translator.load(evt.target.value);
   } */
});