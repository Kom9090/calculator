

window.addEventListener("DOMContentLoaded", function() {
    
    const btnsContainer = document.querySelector(".container");
    let formula = []; //массив для хранения значений 
    let output = document.querySelector(".output"); // поле вывода

    btnsContainer.addEventListener("click", (e) => {

        if(!e.target.closest(".btn")) {
            return; 
        } else if(e.target.closest(".result")) {
            getResult(); // если нажата клавиша "=", то выводим результат вычисления
        } else if(e.target.closest(".clear")) {
            clearOutput(); // если нажата клавиша "очистить", то очищаем поле вывода и массив
        } else {
            changeOperator(); // изминеие оператора, если после оператора ввели другой оператор
            addMultiply(); // добавление оператора умножения по контексту скобок
            pushValueToOutput(); // добавление значения в массив значений
        } 
        
        
        function getResult() {
            let result = eval(formula.join(""));
            output.innerText = result;
            formula.length = 0;
            formula.push(result);
        }
        function clearOutput() {
            formula.length = 0;
            output.innerText = "";
        }
        function changeOperator() {
            if (e.target.closest(".operator")){
                if(isNaN(formula[+formula.length - 1]) && formula[+formula.length - 1] !== ")") {
                    formula.pop();
                }
            }
        }
        function pushValueToOutput() {
            formula.push(e.target.value);
            output.innerText = formula.join("");
        }
        function addMultiply() {
            if (e.target.value === "(") {
                if(formula[+formula.length - 1] ) {
                    formula.push("*");
                }
            } else if (isFinite(e.target.value)) {
                if(formula[+formula.length - 1] === ")") {
                    formula.push("*");
                }
            }
           
        }

    });

    
});