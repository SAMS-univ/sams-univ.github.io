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


var index = [
  {
    filename: "../english_1a2/mediaBox/works/502011a.pdf",
    keywords: ["formas de responder a what do you do", "what", "do", "you", "do", "correct", "al", "Hayy", "castella", "garcia", "al hayy castella garcia"]
  },
  {
    filename: "archivo2.pdf",
    keywords: ["example", "keywords", "for", "file", "2"]
  }
  // Agrega más objetos de archivos aquí
];

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

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var searchTerm = document.getElementById("search-input").value;
    searchFiles(searchTerm);
  });

  function searchFiles(searchTerm) {
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
    });
  }

});  

