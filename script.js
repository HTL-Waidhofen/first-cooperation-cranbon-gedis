function moreInfo(event){
    let info="";
    switch(event){
        case "deiac":
            info="<p><strong>Name:</strong> Gabriel Deiac</p><p><strong>Skills:</strong> ...</p><p><strong>Aufgabe:</strong> </p> <p><strong>Mehr Info:</strong> <a href='deiac.html' target='blank'>Deiac</a></p>";
            break;
        case "forstner":
            info="<p><strong>Name:</strong> Kevin Forstner</p><p><strong>Skills:</strong> ...</p><p><strong>Aufgabe:</strong> </p> <p><strong>Mehr Info:</strong> <a href='forster.html' target='blank'>Kevoo</a></p>";
            break;
        case "berchti":
            info="<p><strong>Name:</strong> Laurenz Berchtold</p><p><strong>Skills:</strong> ...</p><p><strong>Aufgabe:</strong> </p> <p><strong>Mehr Info:</strong> <a href='berchtold.html' target='blank'>Berchti</a></p>";
            break;
        case "halbman":
            info="<p><strong>Name:</strong> Julian Halbmayr</p><p><strong>Skills:</strong> ...</p><p><strong>Aufgabe:</strong></p> <p><strong>Mehr Info:</strong> <a href='halbmayr.html' target='blank'>Halbman</a></p>";
            break;
    }
    document.getElementById("info").innerHTML=info;
}