let nameInput = document.querySelector('.name__input');
let btn = document.querySelector('.button');
let textArea = document.querySelector('.text__btn');
let commList = document.querySelector('.comments-list');


btn.addEventListener('click', function () {
  let nameInputValue = nameInput.value;
  localStorage.setItem('input', nameInputValue);

  let textAreaValue = textArea.value;
  localStorage.setItem('textArea', textAreaValue);
  if (nameInputValue === '' || textAreaValue === '') {
    alert(`Помилка: Ім'я та коментар мають бути заповнені!`);
    return; 
  }
  let divComm = document.createElement('p');
  divComm.textContent = `${nameInputValue}: ${textAreaValue}`;
  commList.appendChild(divComm);
});
let comments = [
    "Це чудово!",
    "Гарна робота!",
    "Цікавий підхід!",
    "Мені подобається ця ідея.",
    "Це вражає!",
    "Треба подумати над цим.",
    "Добре зроблено!",
    "Це виглядає складно.",
    "Це корисна інформація.",
    "Дякую за пояснення!",
    "TOP",
    "Санечка снимаешь?"
  ];
  
  
let names = [
    "Анна",
    "Петро",
    "Олена",
    "Максим",
    "Вікторія",
    "Олександр",
    "Катерина",
    "Дмитро",
    "Санечка снимает",
    "ЯКІЛЬКА",
    "Профимастер21341"
  ];
  function getRandomComment() {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomComment = comments[Math.floor(Math.random() * comments.length)];
  
    let commentReview = document.createElement('p');
    commentReview.textContent = `${randomName}: ${randomComment}`;
    commList.appendChild(commentReview);
  }
  
 
  setInterval(getRandomComment, 5550);