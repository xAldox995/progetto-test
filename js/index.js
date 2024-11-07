document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username && password) {
        alert(`Benvenuto, ${username}!`);
    } else {
        alert("Per favore, inserisci username e password.");
    }
});
