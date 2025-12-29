const birthday = new Date("January 26, 2026 00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff > 0) {
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((diff%(1000*60*60))/(1000*60));
    const s = Math.floor((diff%(1000*60))/1000);
    document.getElementById("time").innerHTML =
      `${d}d ${h}h ${m}m ${s}s`;
  } else {
    clearInterval(timer);
    document.getElementById("time").innerHTML = "🎉 It's Time!";
    document.getElementById("lockedMsg").style.display = "none";
    document.getElementById("surpriseBtn").style.display = "block";
  }
}, 1000);

function goNext() {
  location.href = "welcome.html";
}
