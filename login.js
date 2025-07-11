
const users = {
  "101": "pass101",
  "102": "pass102",
  "103": "pass103",
  "admin": "admin123"
};

function login() {
  const room = document.getElementById("room").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (users[room] && users[room] === pass) {
    if (room === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "room.html?room=" + room;
    }
  } else {
    error.textContent = "गलत रूम नंबर या पासवर्ड!";
  }
}
