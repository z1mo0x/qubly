const revText = document.querySelector(".reviews__text");
const revImg = document.querySelector(".reviews__img");
const revName = document.querySelector(".reviews__name");
const revWork = document.querySelector(".reviews__work");
const revCompanies = document.querySelectorAll(".company");
const revCompanyName = document.querySelectorAll(".company__name");
const burger = document.querySelector(".header__burger");
const list = document.querySelector(".header__list");
const body = document.body;
const html = document.documentElement;
const anchors = document.querySelectorAll('a[href*="#"]');
const textCompanies = [
  '"What I love about Qubly is the first way we can collaborate even if there is a lot of people involved in the process"',
  '"What I love about Qubly is the best way we can collaborate even if there is a lot of people involved in the process"',
  '"What I love about Qubly is the cool way we can collaborate even if there is a lot of people involved in the process"',
  '"What I love about Qubly is the nice way we can collaborate even if there is a lot of people involved in the process"',
  '"What I love about Qubly is the professional way we can collaborate even if there is a lot of people involved in the process"',
];
const nameFounders = {
  "Andrew Morozov": "Frontend Genius",
  "Guillaume Cabane": "CTO @ BigSpring",
  "Artem Lomov": "Typical Coder",
  "Dmitry Podzigun": "Professional DataBase",
  "Anastasya Tinkova": "Just friend",
};
const imgFounders = [
  "img/andrey.jfif",
  "img/Profile.png",
  "img/artem.jfif",
  "img/dima.jfif",
  "img/nastya.jpg",
];

for (let i = 0; i < revCompanyName.length; i++) {
  revCompanies[i].addEventListener("click", () => {
    revText.textContent = textCompanies[i];
    revImg.setAttribute("src", imgFounders[i]);
    const [key, val] = Object.entries(nameFounders)[i];
    revWork.textContent = val;
    revName.textContent = key;

    setInterval(() => {
      revText.classList.add("opac");
      revName.classList.add("opac");
      revWork.classList.add("opac");
      revImg.classList.add("opac");
    });
    revText.classList.remove("opac");
    revName.classList.remove("opac");
    revImg.classList.remove("opac");
    revWork.classList.remove("opac");
    revCompanyName.forEach((e) => {
      e.classList.remove("active");
    });
    revCompanyName[i].classList.add("active");
  });
}

burger.addEventListener("click", () => {
  burger.classList.toggle("active_burger");
  html.classList.toggle("off_scroll");
  body.classList.toggle("off_scroll");
  list.classList.toggle("active_list");
});

anchors.forEach((e) => {
  e.addEventListener("click", (element) => {
    burger.classList.toggle("active_burger");
    list.classList.toggle("active_list");
    html.classList.toggle("off_scroll");
    body.classList.toggle("off_scroll");
  });
});
