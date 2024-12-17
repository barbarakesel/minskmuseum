let coll = document.getElementsByClassName('item-button');
for (let i = 0; i < coll.length; i++)
{
    coll[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let content = this.nextElementSibling();
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
}
function showImage(slideNumber) {
    const mainSlide = document.querySelector('.main-slide img');
    const smallSlides = document.querySelectorAll('.small-slide img');
  
    // Получаем ссылки на изображения выбранного и текущего слайда
    const selectedImage = smallSlides[slideNumber - 2].src;
    const currentImage = mainSlide.src;
  
    // Меняем местами изображения с использованием прозрачности
    mainSlide.src = selectedImage;
    smallSlides[slideNumber - 2].src = currentImage;
    smallSlides[slideNumber - 2].style.opacity = 1; // возвращаем полную прозрачность
  }
  