import Translator from "./translator.js";

var translator = new Translator({
   persist: false,
   languages: ["en", "ru"],
   defaultLanguage: "en",
   detectLanguage: true,
   filesLocation: "/i18n"
});

if (localStorage.getItem("currentLang")) {
   translator.load(localStorage.getItem("currentLang"));
   if (localStorage.getItem("currentLang") === "ru") {
      translator.load("ru");
   }
} else {
   translator.load("en");
   console.log("No language found");
}

document.querySelector("select").addEventListener("change", function (evt) {
   localStorage.setItem("currentLang", evt.target.value);
   translator.load(evt.target.value);
   // if (evt.target.value === "ru") {
   //    document.getElementById("matn").innerHTML = "Доставка по всему миру и профессиональные решения"
   // } else {
   //    document.getElementById("matn").innerHTML = "Worldwide shipping and professional solutions"
   // }
});