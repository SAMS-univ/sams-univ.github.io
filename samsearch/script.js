//============== Index ==================

var index = [
  {
    filename: "media/doc01.pdf",
    keywords: ["formas de responder a what do you do", "what", "do", "you", "do", "correct", "al", "hayy", "castella", "garcia", "al hayy castella garcia", "n-1"]
  },
  {
    filename: "archivo2.pdf",
    keywords: ["example", "keywords", "for", "file", "2", "el gato garabato", "castella", "n-2"]
  }
  // Agrega más objetos de archivos aquí
  /*{
    filename: "",
    keywords: [""]
  }*/


];

//=======================================

//================ Output ===============

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var searchTerm = document.getElementById("search-input").value;
    searchFiles(searchTerm);
  });

  /*function searchFiles(searchTerm) {
    // Resto del código de búsqueda aquí
    var resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    var matchedFiles = index.filter(function(file) {
      return file.keywords.includes(searchTerm.toLowerCase());
    });

    matchedFiles.forEach(function(file) {
      var resultElement = document.createElement("div");
      resultElement.classList.add("result");
      var linkElement = document.createElement("a");
      linkElement.setAttribute("href", file.filename);
      linkElement.setAttribute("target", "_blank"); // Abrir el enlace en una nueva pestaña
      linkElement.textContent = file.filename;
      resultElement.appendChild(linkElement);
      resultsContainer.appendChild(resultElement);
    });*/

    function searchFiles(searchTerm) {//
      var resultsContainer = document.getElementById("search-results");
      resultsContainer.innerHTML = "";
    
      var matchedFiles = index.filter(function(file) {
        // Convertir el término de búsqueda y las palabras clave a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
        var lowercaseSearchTerm = searchTerm.toLowerCase();
        var lowercaseKeywords = file.keywords.map(function(keyword) {
          return keyword.toLowerCase();
        });
    
        // Verificar si alguna de las palabras clave contiene el término de búsqueda
        return lowercaseKeywords.some(function(keyword) {
          return keyword.includes(lowercaseSearchTerm);
        });
      });
    
      matchedFiles.forEach(function(file) {
        // Resto del código para mostrar los resultados
        var resultElement = document.createElement("div");
        resultElement.classList.add("result");
        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", file.filename);
        linkElement.setAttribute("target", "_blank"); // Abrir el enlace en una nueva pestaña
        linkElement.textContent = file.filename;
        resultElement.appendChild(linkElement);
        resultsContainer.appendChild(resultElement);

        // Agregar clases o identificadores al enlace
        linkElement.classList.add("custom-link");
        linkElement.id = "link-" + file.filename.replace(/[^a-zA-Z0-9]/g, "-");

        resultElement.appendChild(linkElement);
        resultsContainer.appendChild(resultElement);

        
      });
    //}//*/
  }

});  

//======================================


//===================== plugins ============================

function plugin_samsearchAb() {
    alert("Do you need more help? Try SAMSearch Ab!!!");
}
//==========================================================





//====== Del ===========

/*function searchFiles(searchTerm) {
  var resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  fetch("index.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(index) {
      var matchedFiles = index.filter(function(file) {
        return file.keywords.includes(searchTerm.toLowerCase());
      });

      matchedFiles.forEach(function(file) {
        var resultElement = document.createElement("div");
        resultElement.classList.add("result");
        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", file.filename);
        linkElement.setAttribute("target", "_blank"); // Abrir el enlace en una nueva pestaña
        linkElement.textContent = file.filename;
        resultElement.appendChild(linkElement);
        resultsContainer.appendChild(resultElement);
      });
    });
}*/


/*function searchFiles(searchTerm) {
  var resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  var matchedFiles = index.filter(function(file) {
    return file.keywords.includes(searchTerm.toLowerCase());
  });

  matchedFiles.forEach(function(file) {
    var resultElement = document.createElement("div");
    resultElement.classList.add("result");
    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", file.filename);
    linkElement.setAttribute("target", "_blank"); // Abrir el enlace en una nueva pestaña
    linkElement.textContent = file.filename;
    resultElement.appendChild(linkElement);
    resultsContainer.appendChild(resultElement);
  });
}*/


/*document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var searchTerm = document.getElementById("search-input").value;
  searchFiles(searchTerm);
});*/

//======================
