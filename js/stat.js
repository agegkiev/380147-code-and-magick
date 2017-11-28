window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = "white";
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = "black"
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var currentIndex = 0;
  var max = times[currentIndex];

  for (var i = currentIndex + 1; i < times.length; i++) {
    if (max < times[i]) {
      max = (Math.round(times[i] * 10) / 10);
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var myColor = 'rgba(255, 0, 0, 1)';
  var histogramWidth = 40;
  var jump = 50;
  var baseY = 240;
  var baseX = 140;
  var lineHeight = 15;
  var anyColor;
  var getColor = function () {
    if (names[i] === 'Вы') {
      return myColor;
    }
    return anyColor;
  }

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (var i = 0; i < times.length; i++) {
    getRandomInRange(0.5, 1);
    anyColor = 'rgba(0, 0, 255, ' + getRandomInRange(0.1, 1) + ')';
    ctx.fillStyle = getColor();
    ctx.fillRect(baseX + (jump + histogramWidth) * i, baseY, histogramWidth, -(times[i] * step));
    ctx.fillText(names[i], baseX + (jump + histogramWidth) * i, baseY + lineHeight);
    ctx.fillText((Math.round(times[i] * 10) / 10), baseX + (jump + histogramWidth) * i, baseY -(times[i] * step) - lineHeight );
  }
}
