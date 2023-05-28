
const loadMeal = document.getElementById("loadMeal");

const loadMeals = (searchText) => {
    loadMeal.innerHTML="";
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error=>{
console.log(error)
        })

}

const showMeals = (data => {
    data.forEach(element => {
        console.log(element)
        const { strTags, strMealThumb,idMeal} = element;
        const ele = document.createElement("div");
        ele.classList.add("col");
        ele.innerHTML = `
    <div class="card">
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${strTags}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalbox" onclick="showDetails2(${idMeal})">
             Details
              </button>
            </div>
          </div>
    `;
        loadMeal.appendChild(ele);
    });
});

// const showDetails=(idMeal)=>{

//  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

// fetch(url)
// .then(res=> res.json())
// .then(data=>showDataModelBox(data.meals))
// }



const showDetails2= async (idMeal)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
try{
    const res= await fetch(url);
const data= await res.json();
showDataModelBox(data.meals)
}
catch(error){

}
}


showDataModelBox=data=>{

data.forEach(meal=>{
console.log(meal)
const{strArea,strCategory,strMeal:title,strMealThumb,strTags}=meal;
document.getElementById("modalboxLabel").innerText=title;
const modal_body=document.getElementById("modal_body");
modal_body.innerHTML=`

<img class="img-fluid" src="${strMealThumb}">
<p>strArea: ${strArea}</p>
<p>strCategory: ${strCategory}</p>
<p>strTags: ${strTags}</p>

`;

})



}


// search product 

const searchText=()=>{
    const searchValue=document.getElementById("searchField").value;
    loadMeals(searchValue);
}



loadMeals('fish')


