const TASK_PATTERN= /(?!^\s*?$)^.+$/;

function onInputHandler(event) {

    isValid = TASK_PATTERN.test(this.value);
    if(isValid){

        this.classList.remove("invalidStyle");
        this.classList.add("validStyle");

    }else{
        this.classList.add("invalidStyle");
        this.classList.remove("validStyle");
    }


    console.log(isValid);
}