let balance = 0;

function deposit() {
    let money = window.prompt("Deposit: ");
    if (validateInput(money)) {
        balance += Number(money);
        updateBalanceElement();
        alert(`Balance: ${balance}`);
    } else {
        alert('Invalid Input!');
    }
}

function withdraw() {
    let money = window.prompt("Withdraw: ");
    if (validateInput(money)) {
        if (money > balance) {
            alert('Balance is not enough!');
        } else {
            balance -= Number(money);
            updateBalanceElement();
            alert(`Balance: ${balance}`);
        }
    } else {
        alert('Invalid Input!');
    }
}

function updateBalanceElement() {
    document.getElementById("balance").textContent = `Balance: ${balance}`;
}

function validateInput(money) {
    return !isNaN(money) && money >= 0;
}