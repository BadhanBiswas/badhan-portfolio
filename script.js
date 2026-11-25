(() => {
  // Hero slides: each one recomposes the orange bloom.
  const comps = [
    ["4%","-4%","96%","46%"], ["50%","8%","12%","62%"],
    ["92%","-2%","6%","30%"], ["30%","70%","88%","14%"]
  ];
  const bloom = document.querySelector(".bloom"), cur = document.getElementById("cur");
  let i = 0;
  const go = n => {
    i = (n + comps.length) % comps.length;
    ["--x1","--y1","--x2","--y2"].forEach((k, j) => bloom.style.setProperty(k, comps[i][j]));
    cur.textContent = String(i + 1).padStart(2, "0");
  };
  document.getElementById("prev").onclick = () => go(i - 1);
  document.getElementById("next").onclick = () => go(i + 1);

  // Active nav link follows scroll.
  const links = [...document.querySelectorAll("nav a")];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.hash === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  ["work", "about", "contact"].forEach(id => io.observe(document.getElementById(id)));

  document.getElementById("yr").textContent = new Date().getFullYear();
})();
