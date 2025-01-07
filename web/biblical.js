fetch('https://raw.githubusercontent.com/anwolosz/readings/main/Bible.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let div = document.getElementById("bible-readings")
    for (let j = 0; j < data.length; j++) {
        div.innerHTML += `<h3>${data[j].translation}</h3><table id=${data[j].translation} class="table"><th>Book</th><th>Finished</th></table>`
        let tbody = document.getElementById(data[j].translation)
        for (let i = 0; i < data[j].already_read.length; i++) {
            tbody.innerHTML += `<tr><td>${data[j].already_read[i].book}</td><td>${data[j].already_read[i].finished}</td></tr>`
        }
    }
    scrollToAnchor()

}).catch(function (err) {
    console.warn('Something went wrong.', err);
});