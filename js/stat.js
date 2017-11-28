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
  var maxIndex = -1;

  for (var i = currentIndex + 1; i < times.length; i++) {
    if (max < times[i]) {
      max = (Math.round(times[i] * 10) / 10);
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var myColor = 'rgba(255, 0, 0, 1)';
  var histogramWidth = 40;
  var jump = 50;
  var baseY = 240;
  var baseX = 120;
  var lineHeight = 15;

  for (var i = 0; i < times.length; i++){
    ctx.fillRect(baseX, baseY, histogramWidth, -(times[i] * step));
//    ctx.fillText(names[i], baseX += 90 * i + histogramWidth, baseY + lineHeight + jump * i);
  }

console.log(names)

}
