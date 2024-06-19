let balance = 0;

function deposit() {
    let money = window.prompt("Deposit: ");
    balance += Number(money);
    document.getElementById("balance").textContent = `Balance: ${balance}`;
    alert(`Balance: ${balance}`);
}

function withdraw() {
    let money = window.prompt("Withdraw: ");
    balance -= Number(money);
    document.getElementById("balance").textContent = `Balance: ${balance}`;
    alert(`Balance: ${balance}`);
}