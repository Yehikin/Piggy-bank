// У класса PiggyBank должны быть следующие методы:
// addCoin(value) - добавить монету
// showCoins() - показать количество монет
// getTotal() - вывести сумму монет

// const smallPiggyBank = new PiggyBank(100);
// const bigPiggyBank = new PiggyBank(1000);

class PiggyBank {
    constructor(maxValue){
        this.maxValue = maxValue;
        this.coins = { 1: 0, 3: 0, 5: 0, 10: 0};    
    }
    addCoin(coin) {
        this.coins[coin]++;
        this.showCoins();
        this.getTotal();
    }

    showCoins() {
        const values = document.querySelectorAll(".my__ul_list li span");
        Object.keys(this.coins).forEach((coin, index) => {
            values[index].textContent = this.coins[coin]
        });
    }

    getTotal() {
        const totalcoins = document.querySelector("#totalAmount");
        const sum = Object.keys(this.coins).reduce((acc, coin) => {
            // [1, 3, 5, 10]
            return acc + this.coins[coin] * coin; 
        }, 0);
        totalcoins.textContent = sum;

        return sum;
    }
}

const smallPiggyBank = new PiggyBank(100);

const buttons = document.querySelectorAll(".btnAdd");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        const coin = parseInt(this.textContent);
        smallPiggyBank.addCoin(coin);

        console.log(smallPiggyBank);
    });
});