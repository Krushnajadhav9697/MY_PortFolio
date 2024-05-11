 text = ["i'm a full stack web developer", "i enjoy creting website"]
 i=0
 j=0
 function about(){
    document.getElementById("about").innerHTML += text[i][j]
    j++
    if(j>text[i].length){
        j=0
        document.getElementById("about").innerHTML = ""
        i++
        if(i>=text.length){
            i=0
        }
    }
 }
 setInterval(about,200)