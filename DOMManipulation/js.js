// Add new article 
function showAddNew(){
    let form = document.getElementById("newContent");
    form.style.display = "flex";
}

function addNewArticle(){
    let titleIn = document.getElementById("inputHeader").value;

    let typeIn = document.querySelector('input[name="articleType"]:checked');
    let type = "";
    if (typeIn.id == "opinionRadio") {
        type = "Opinion";
    } 
    else if (typeIn.id == "recipeRadio") {
        type = "Recipe";
    } 
    else if (typeIn.id == "lifeRadio") {
        type = "Update";
    }

    let textIn = document.getElementById("inputArticle").value;

    let article = document.createElement("article");
    article.className = type.toLowerCase();
    let marker = document.createElement("span");
    marker.className = "marker";
    marker.innerText = type;
    let h2 = document.createElement("h2");
    h2.innerText = titleIn;
    let para = document.createElement("p");
    para.innerText = textIn;

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(para);

    document.getElementById("articleList").appendChild(article);
}


// show filter options
function showFilter(){
    
}