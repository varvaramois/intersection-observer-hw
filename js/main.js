// увага! тут мені допомагав чатік гпт, ця частина коду відноситься до 7 пункту дз, там де просять додати якусь
// анімацію завантаження. я знайшла в інтернеті деякі приклади як загалом зробити такий лоадер при завантаженні 
// сторінки, але щоб саме для фотки зробити я скористалася допомогою чатика, шоб щось зрозуміти..
const images = document.querySelectorAll(".list__img"); // знаходжу фотки за класом
images.forEach((img) => {
  const loader = img.parentElement.querySelector(".loader"); // гпт запропонував використати це щоб пізніше лоадер
  // пропадав саме по черзі у вже прогружених елементів, а не одразу в усіх
  const tempImg = new Image(); // на час завантаження створюється тимчасове фото, яке не відображається на сторінці
  tempImg.src = img.getAttribute("data-alt-src"); // і приймає атрибут нового фото (на яке ми змінюємо)

  tempImg.onload = function () { // чекаємо на завантаження зображення
    img.src = tempImg.src; // міняємо його
    img.style.opacity = "1"; // воно стає видимим на сторінці
    loader.style.display = "none"; // скриваємо лоадер - кінець завантаження
  };
});
// якось так 🦧

function changeImages(elements) {
  elements.forEach((element) => {
    const img = element.target.querySelector("img");
    if (element.isIntersecting) {
      img.src = img.getAttribute("data-alt-src");
    } else {
      img.src = img.getAttribute("src");
    }
  });
}

const observer = new IntersectionObserver(changeImages, {
  threshold: 0.5,
});

const li = document.querySelectorAll(".list__item");
li.forEach((item) => observer.observe(item));
