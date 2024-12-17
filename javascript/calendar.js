const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });
  document.addEventListener("DOMContentLoaded", function () {
    const datesContainer = document.getElementById("datesContainer");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
  
    const currentDate = new Date();
    const dates = [];
  
    for (let i = -1; i <= 10; i++) {
      const date = new Date();
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }
  
    function updateDates() {
      datesContainer.innerHTML = "";
      dates.forEach(date => {
        const dateElement = document.createElement("div");
        dateElement.classList.add("date");
        if (date.toDateString() === currentDate.toDateString()) {
          dateElement.classList.add("today");
        } else if (date < currentDate) {
          dateElement.classList.add("past");
        } else {
          dateElement.classList.add("future");
        }
  
        // Форматируем дату и месяц
        const optionsDate = { day: 'numeric', month: 'long' };
        const formattedDate = date.toLocaleDateString('ru-RU', optionsDate);
  
        // Форматируем день недели
        const optionsDayOfWeek = { weekday: 'long' };
        const dayOfWeek = date.toLocaleDateString('ru-RU', optionsDayOfWeek);
  
        const dateTextElement = document.createElement("div");
        dateTextElement.classList.add("date-text");
        dateTextElement.textContent = formattedDate;
  
        const dayOfWeekElement = document.createElement("div");
        dayOfWeekElement.classList.add("day-of-week");
        dayOfWeekElement.textContent = dayOfWeek;
  
        dateElement.appendChild(dateTextElement);
        dateElement.appendChild(dayOfWeekElement);
  
        dateElement.addEventListener("click", () => handleDateClick(dateElement));
        datesContainer.appendChild(dateElement);
      });
    }
  
    function handleDateClick(element) {
      // Очистим предыдущие выделения
      const selectedDate = document.querySelector('.selected-date');
      if (selectedDate) {
        selectedDate.classList.remove('selected-date');
      }
  
      // Выделим выбранную дату
      element.classList.add('selected-date');
    }
  
    leftArrow.addEventListener("click", () => {
      datesContainer.scrollBy({ left: -180, behavior: 'smooth' }); // Ширина даты
    });
  
    rightArrow.addEventListener("click", () => {
      datesContainer.scrollBy({ left: 180, behavior: 'smooth' }); // Ширина даты
    });
  
    updateDates();
  });
  /**//**/
  function toggleImage() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.style.display = (imageContainer.style.display === 'none' || imageContainer.style.display === '') ? 'block' : 'none';
  }
  