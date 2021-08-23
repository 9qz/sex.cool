var i=0;
setInterval(function(){
    var titles=[
"9",
"9_",
"9q",
"9q<",
"9qz",
"9qz _",
"9qz <",
"9qz <$",
"9qz <3",
"9qz <$",
"9qz <",
"9qz _",
"9qz",
"9q<",
"9q",
"9_",
"9",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 650);
