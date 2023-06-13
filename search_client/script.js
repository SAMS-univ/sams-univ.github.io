document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    searchFiles(searchTerm);
});

function searchFiles(searchTerm) {
    var resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    // Array con las URLs de los archivos PDF
    var pdfUrls = [
        "ruta/al/archivo1.pdf",
        "ruta/al/archivo2.pdf",
        "ruta/al/archivo3.pdf",
        ../english_1a2/mediaBox/works/502011a.pdf, 
        // Agrega más URLs de archivos PDF aquí
    ];

    pdfUrls.forEach(function (pdfUrl) {
        // Cargar y procesar el archivo PDF
        PDFJS.getDocument(pdfUrl).then(function (pdf) {
            var totalNumPages = pdf.numPages;
            var searchPromises = [];

            for (var i = 1; i <= totalNumPages; i++) {
                searchPromises.push(getPageText(pdf, i));
            }

            Promise.all(searchPromises).then(function (pageTexts) {
                var searchText = pageTexts.join(" ").toLowerCase();
                if (searchText.includes(searchTerm)) {
                    var resultElement = document.createElement("div");
                    resultElement.classList.add("result");
                    var linkElement = document.createElement("a");
                    linkElement.setAttribute("href", pdfUrl);
                    linkElement.textContent = pdfUrl;
                    resultElement.appendChild(linkElement);
                    resultsContainer.appendChild(resultElement);
                }
            });
        });
    });
}

function getPageText(pdf, pageNumber) {
    return new Promise(function (resolve, reject) {
        pdf.getPage(pageNumber).then(function (page) {
            page.getTextContent().then(function (textContent) {
                var pageText = textContent.items.map(function (item) {
                    return item.str;
                }).join(" ");
                resolve(pageText);
            });
        });
    });
}
