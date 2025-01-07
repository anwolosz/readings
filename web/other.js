fetch('https://raw.githubusercontent.com/anwolosz/readings/main/already_read.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let tbody = document.getElementById("other-readings")
    for (let i = 0; i < data.length; i++) {
        tbody.innerHTML += `<tr><td>${data[i].title}</td><td>${data[i].author ?? ""}</td><td>${data[i].translator ?? ""}</td><td>${data[i].publisher ?? ""}</td><td>${data[i].editor ?? ""}</td><td>${data[i].finished}</td></tr>`
    }
    scrollToAnchor()

}).catch(function (err) {
    console.warn('Something went wrong.', err);
});