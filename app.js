

window.addEventListener("DOMContentLoaded", function() {

    const btnsContainer = document.querySelector(".container");
    let formula = [];
    let output = document.querySelector(".output");

    btnsContainer.addEventListener("click", (e) => {

        if(!e.target.closest(".btn")) {
            return;
        } else if(e.target.closest(".result")) {
            getResult();
        } else if(e.target.closest(".clear")) {
            clearOutput();
        } else {
            changeOperator();
            pushValueToOutput(); 
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

    });

    
});