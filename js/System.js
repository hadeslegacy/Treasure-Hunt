class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        //var Authen= null
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.

        if(actualCode===enteredCode.toUpperCase()){
            return true;
        } else{
            return false
        }

        //if(Authen===true){


        //}

        
    }

}