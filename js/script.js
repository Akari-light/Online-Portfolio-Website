$("#form").submit(function (e) {
    e.preventDefault();
    alertsubmit = document.getElementById('alertsubmit');
    namesubmit = document.getElementById('namesubmit');
    namesubmit.innerText = document.getElementById('formname').value;
    alertsubmit.style.display = "block";
    setTimeout(() => {
        alertsubmit.style.display = "none";
    }, 3000)
});
