(function () {
  var svg = document.getElementById("contours");
  if (!svg) return;
  var NS = "http://www.w3.org/2000/svg", rings = 11, pts = 160;
  for (var k = 1; k <= rings; k++) {
    var base = 26 * k, d = "";
    for (var i = 0; i <= pts; i++) {
      var a = (i / pts) * Math.PI * 2;
      var wob = 1 + 0.10 * Math.sin(3 * a + k * 0.5) + 0.06 * Math.sin(5 * a - k * 0.35) + 0.035 * Math.sin(8 * a + k);
      var r = base * wob * (1 + 0.04 * k * Math.cos(a - 0.6));
      var x = (r * Math.cos(a) * 1.08).toFixed(1), y = (r * Math.sin(a)).toFixed(1);
      d += (i ? "L" : "M") + x + " " + y;
    }
    var p = document.createElementNS(NS, "path");
    p.setAttribute("d", d + "Z");
    p.setAttribute("pathLength", "1");
    p.style.animationDelay = (k * 0.16) + "s";
    svg.appendChild(p);
  }
})();
