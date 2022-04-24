
const uploadForm = document.getElementById('uploadForm')
const progressText = document.getElementById('progress-text')
const progressBar = document.querySelector('#progressBar > .progress-bar')

uploadForm.addEventListener('submit', uploadFile);

function uploadFile(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "//localhost:3000/upload", true);
    xhr.upload.addEventListener("progress", e => {
        // console.log(e);
        const percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
        progressBar.style.width = percent.toFixed(2) + "%"
        progressText.innerText = percent.toFixed(2) + "%"
    })

    xhr.upload.onloadend = function (e) {
        window.location.href = "http://localhost:3000/success";
    }

    xhr.send(new FormData(uploadForm))
}