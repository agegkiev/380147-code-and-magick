window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = "white";
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = "black"
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(120, 100, 40, 150);
}
