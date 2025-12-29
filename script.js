// Birthday Date
const birthday = new Date("January 26, 2026 00:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = birthday - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("time").innerHTML = 
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    clearInterval(timer);
    document.getElementById("time").innerHTML = "🎉 It's Time!";
    document.getElementById("lockedMsg").style.display = "none";

    const btn = document.getElementById("surpriseBtn");
    btn.style.display = "inline-block";
    btn.classList.add("glow");
  }
}, 1000);

function goNext() {
  window.location.href = "welcome.html";
}
