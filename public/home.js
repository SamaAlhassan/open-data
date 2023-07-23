function toggle(idTab, idContent) {
    // to 
    let nonActive = document.getElementsByClassName('activeTab');
    for (let i = 0; i < nonActive.length; i++) {
        nonActive[i].classList.remove('activeTab');
    }

    let content = document.getElementsByClassName('content');

    for (let i = 0; i < content.length; i++) {
        content[i].classList.replace('block', 'hidden');
    }

    let divCon = document.getElementById(idContent);
    let divTab = document.getElementById(idTab);

    divTab.classList.add('activeTab');
    divCon.classList.replace('hidden', 'block');
}

function warning() {
    alert("المعذرة، مازلنا نعمل على هذه الصفحة :(");
}

