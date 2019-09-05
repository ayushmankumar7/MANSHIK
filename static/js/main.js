


    function go(){
        var button = document.getElementById("second");
        var mai = document.getElementById("main");
        button.style.visibility = "hidden";
        var wel = document.getElementById("wel");
        wel.style.visibility = "hidden";
        var wel2 = document.getElementsByClassName("about");

        button.style.animation= "down linear 1s ";
        
        button.style.zIndex = "-1";
        
        mai.style.visibility = "visible";
        mai.style.animation = "up2 linear 1s";
        document.body.style.backgroundImage=  "url(\"{{url_for('static', filename ='sacred5.jpg' )\")}}";
        document.body.style.backgroundSize = "contain";

    }
   
    
    var L = 0;
    var total = "";
    var transfer;
    var x = "";
    function HandleRage() {
    // body...	
    x = document.getElementById("rageText").value;
    //var
    

    L = x.length;
    if(L == 30)
    {
    total = total + x + " ";
    console.log(total);
    x = "";
    document.getElementById("rageText").value = x;
    L = 0;
    }
    document.getElementById("para").innerHTML = x;
    document.getElementById("para").style.transition = "all linear 1s ";
    transfer = total;
    }
    function come(){
        var button = document.getElementById("submit");
        var mai = document.getElementById("main");
        main.style.visibility = "collapse";
        console.log("New Page: ",transfer);
        var n = document.getElementById("final");
        n.style.visibility = "visible"
        document.getElementById("ftext").value = transfer;
        button.style.animation = "down linear 1s";

    }