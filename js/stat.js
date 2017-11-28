'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var currentIndex = 0;
  var maximum = times[currentIndex];

  for (var i = currentIndex + 1; i < times.length; i++) {
    if (maximum < times[i]) {
      maximum = times[i].toFixed(0);
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (maximum - 0);
  var myColor = 'rgba(255, 0, 0, 1)';
  var histogramWidth = 40;
  var jump = 50;
  var baseY = 240;
  var baseX = 140;
  var lineHeight = 15;
  var anyColor;
  var getColor = function () {
    if (names[j] === 'Вы') {
      return myColor;
    }
    return anyColor;
  };

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (var j = 0; j < times.length; j++) {
    getRandomInRange(0.5, 1);
    anyColor = 'rgba(0, 0, 255, ' + getRandomInRange(0.1, 1) + ')';
    ctx.fillStyle = getColor();
    ctx.fillRect(baseX + (jump + histogramWidth) * j, baseY, histogramWidth, -(times[j] * step));
    ctx.fillText(names[j], baseX + (jump + histogramWidth) * j, baseY + lineHeight);
    ctx.fillText(times[j].toFixed(0), baseX + (jump + histogramWidth) * j, baseY - (times[j] * step) - lineHeight);
  }
};
