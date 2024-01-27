// try {
//   const result = undefinedVar + 1;
//   console.log("Код для выполнения");
// } catch (error) {
//   if (error.name === "ReferenceError") {
//     console.log("Ошибка ссылки");
//   } else {
//     console.log(error.message);
//   }
// }

// console.log("Продолжение кода");
// setTimeout(() => {
//   try {
//     const result = undefinedVar + 1;
//   } catch (error) {
//     console.log("Ошибка таймаута");
//   }
// }, 0);

// console.log("Продолжение кода");

// const data = '{"name": "Mike"}';

// try {
//   const user = JSON.parse(data);
//   const result = undefinedVar + 1;
//   if (!user.age) {
//     throw new SyntaxError("Возраста нет");
//   }
// } catch (error) {
//   if (error.name === "SyntaxError") {
//     console.log(error.message);
//   } else {
//     throw error;
//   }
// }

// // throw "Ошибка";

// console.log("Код");

// $('button').on('my-click', function() { // ...
// })
// $("button").on("my-click", function () {
//   // ...
// });
// $("button").on("my-click", function () {
//   // ...
// });

// $('.another-button').on('click', function() {
//   $('button').trigger('my-click')
// })

class Observer {
  constructor() {
    this.listeners = {}; // 'arrived': [() => {}]
  }

  on(eType, handler) {
    if (!(eType in this.listeners)) {
      this.listeners[eType] = [];
    }
    this.listeners[eType].push(handler);
  }

  trigger(eType, args) {
    if (eType in this.listeners) {
      this.listeners[eType].forEach((handler) => {
        handler(args);
      });
    }
  }

  off(eType, handler) {
    if (eType in this.listeners) {
      this.listeners[eType] = this.listeners[eType].filter((item) => {
        return item !== handler;
      });
    }
  }
}

const observer = new Observer();

const arrived = (data) => {
  console.log("Гость по имени " + data.name + " прибыл");
};
const departed = (data) => {
  console.log("Гость по имени " + data.name + " отбыл");
};

observer.on("arrived", arrived);
observer.on("arrived", arrived);

observer.on("departed", departed);

observer.trigger("arrived", { name: "Mike" });
observer.trigger("arrived", { name: "John" });

observer.trigger("departed", { name: "Mike" });

observer.off("arrived", arrived);
console.log(observer);
// observer.on("arrived", () => {
//   console.log("add");
// });

// console.log(observer);
