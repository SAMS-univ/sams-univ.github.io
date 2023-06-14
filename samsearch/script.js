function searchFiles(searchTerm) {
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
}
