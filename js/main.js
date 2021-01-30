let operation = "";
    let firstNumber = 0;
    let lastNumber = 0;

    var indicatorElement = document.getElementById("indicator");

    window.addEventListener("load", function(){

        window.addEventListener("keydown", keyFinder);

        var btnNumberElements = document.querySelectorAll(".btn-number");
        btnNumberElements.forEach(element=>{
            element.addEventListener("click", function(e){
                addIndicator(element.outerText);
            });
        });

        var btnOperationElements = document.querySelectorAll(".btn-operation");
        btnOperationElements.forEach(element=>{
            element.addEventListener("click", function(e){
                if(element.outerText === "."){
                    addIndicator(element.outerText);
                }
                else if(element.outerText === "*"){
                    operation = "*";
                }
                else if(element.outerText === "+"){
                    operation = "+";
                }
                else if(element.outerText === "-"){
                    operation = "-";
                }
                else if(element.outerText === "/"){
                    operation = "/";
                }
                firstNumber = getIndicator();
                addIndicator(`${operation}`);
            });
        });

        var btnEqualElement = document.querySelector(".btn-equal");
        btnEqualElement.addEventListener("click", function(e){

            if(operation  === "*"){
                var lastNumber = getIndicator();
                var total = firstNumber * lastNumber;
                setIndicator(total);
            }
            else if(operation  === "-"){
                var lastNumber = getIndicator();
                var total = firstNumber - lastNumber;
                setIndicator(total);
            }
            else if(operation  === "+"){
                var lastNumber = getIndicator();
                var total = firstNumber + lastNumber;
                setIndicator(total);
            }
            else{
                var lastNumber = getIndicator();
                var total = firstNumber / lastNumber;
                setIndicator(total);
            }
        });

        var btnResetElement = document.querySelector(".btn-reset");
        btnResetElement.addEventListener("click", function(){
            firstNumber = 0;
            lastNumber = 0;
            clearIndicator();
        });
    });

    function keyFinder(e){
        const numberElementPrefix = "number_";
        const dot = "operation_dot";
        const equal = "operation_equal";
        const plus = "operation_plus";
        const minus = "operation_minus";
        const multiply = "operation_multiply";
        const divide = "operation_divide";

        let element;
        if(e.key >= "0" && e.key <= "9"){
            element = document.getElementById(numberElementPrefix + e.key);
            element.click();
        }
        else if(e.key === "." || e.key === ","){
            element = document.getElementById(dot);
            element.click();
        }
        else if(e.key === "*"){
            element = document.getElementById(multiply);
            element.click();
        }
        else if(e.key === "+"){
            element = document.getElementById(plus);
            element.click();
        }
        else if(e.key === "-"){
            element = document.getElementById(minus);
            element.click();
        }
        else if(e.key === "/"){
            element = document.getElementById(divide);
            element.click();
        }
        else if(e.key === "Enter"){
            element = document.getElementById(equal);
            element.click();
        }
        else if(e.key === "Backspace"){
            backspace();
        }
    }
    function addIndicator(text){
        indicatorElement.innerText += text;
    }
    function setIndicator(text){
        indicatorElement.innerText = text;
    }
    function clearIndicator(){
        indicatorElement.innerText = "";
    }
    function backspace(){
        var text = indicatorElement.innerText;
        indicatorElement.innerText = text.replace(text.slice(text.length-1), "");
    }
    function getIndicator(){
        return Number(indicatorElement.innerText.replace(firstNumber + operation,""));
    }