function createAccount(pin, amount) {
    let pinNum = pin;
    let balance = amount || 0;
    return {
        checkBalance(pin) {

            if (pin === pinNum) {
                return `$${balance}`;
            } else {
                return "Invalid PIN."
            }
        },
        deposit(pin, num) {
            if (pin === pinNum) {
                balance += num
                return `Successfully deposited $${num}. Current balance: $${balance}.`
            } else {
                return "Invalid PIN."
            }
        },
        withdraw(pin, num) {
            if (pin === pinNum) {
                if (balance - num < 0) {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                } else {
                    balance -= num;
                    return `Successfully withdrew $${num}. Current balance: $${balance}.`;
                }
            } else {
                return "Invalid PIN."
            }
        },
        changePin(pin, newPin) {
            if (pin === pinNum) {
                pinNum = newPin;
                return 'PIN successfully changed!';
            }
        }
    }
}

module.exports = { createAccount };
