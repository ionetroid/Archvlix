function redirecionar(){
    window.open ("https://archive.org/");
    // abre na mesma aba window.location.href = "https://archive.org/";
    }
    function trocar (elemento){
        document.getElementById("mousemove").innerHTML = "INTERNET ARCHIVE";
        elemento.innerHTML = "INTERNET ARCHIVE"
        
    }
    
    function voltar (elemento){
        document.getElementById("mousemove").innerHTML = "ARCHVLIX";
        elemento.innerHTML = "ARCHVLIX"
    }
      