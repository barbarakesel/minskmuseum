function changeDef() {
  const container = document.querySelector('.content-page2_items');
  const thumb = container.querySelector('.thumb');

  container.addEventListener('mousemove', (event) => {
    const x = Math.min(event.offsetX, container.clientWidth - thumb.clientWidth);
    thumb.style.left = `${x}px`;
  });
}

// Вызывайте функцию changeDef, чтобы она начала слушать события
changeDef();





///////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  // Объект для хранения информации о текущем положении скролла
  var scrollPositions = {};

  // Функция для отображения блока и сохранения/восстановления положения скролла
  function showBlock(blockId) {
    // Сохранение текущего положения скролла
    scrollPositions[blockId] = window.scrollY;

    // Скрытие всех блоков
    var allBlocks = document.querySelectorAll('.block');
    allBlocks.forEach(function (block) {
      block.classList.add('hidden');
    });

    // Отображение выбранного блока
    var selectedBlock = document.getElementById(blockId);
    selectedBlock.classList.remove('hidden');

    // Восстановление положения скролла
    window.scrollTo(0, scrollPositions[blockId]);
  }
});
