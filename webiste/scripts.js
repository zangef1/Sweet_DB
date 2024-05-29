let currentPage = 1;

function nextPage() {
    currentPage += 1;
    document.getElementById('page-number').textContent = currentPage;
    
}

function previousPage() {
    if (currentPage > 1) {
        currentPage -= 1;
        document.getElementById('page-number').textContent = currentPage;
       
    }
}

function searchTable() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBox");
    filter = input.value.toUpperCase();
    table = document.getElementById("moleculeTable");
    tr = table.getElementsByTagName("tr");

    
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        let rowText = "";
        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                rowText += txtValue + " ";
            }
        }
        if (rowText.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
